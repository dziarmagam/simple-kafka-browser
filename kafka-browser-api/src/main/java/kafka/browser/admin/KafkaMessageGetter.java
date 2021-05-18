package kafka.browser.admin;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.common.TopicPartition;

import java.time.Duration;
import java.time.Instant;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import kafka.browser.connection.KafkaConsumerPool;
import scala.Int;


public class KafkaMessageGetter {

    private final KafkaConsumerPool kafkaConsumerPool;
    private final Long bytesReturnLimit = 1024L * 1024L * 1024L * 4L;

    public KafkaMessageGetter(KafkaConsumerPool kafkaConsumerPool) {
        this.kafkaConsumerPool = kafkaConsumerPool;
    }

    public String getLastMessage(TopicPartition topicPartition) {
        try (var kafkaConsumer = kafkaConsumerPool.getConsumerConnection()) {
            Long offset = kafkaConsumer.endOffsets(List.of(topicPartition)).get(topicPartition);
            kafkaConsumer.assign(List.of(topicPartition));
            kafkaConsumer.seek(topicPartition, offset - 1);
            ConsumerRecords<byte[], byte[]> poll = kafkaConsumer.poll(Duration.ofSeconds(1));
            ConsumerRecord<byte[], byte[]> lastRecord = extractLastRecord(poll);
            return new String(lastRecord.value());
        }
    }

    private ConsumerRecord<byte[], byte[]> extractLastRecord(ConsumerRecords<byte[], byte[]> poll) {
        ConsumerRecord<byte[], byte[]> consumerRecord;
        Iterator<ConsumerRecord<byte[], byte[]>> iterator = poll.iterator();
        do {
            consumerRecord = iterator.next();
        } while (iterator.hasNext());
        return consumerRecord;
    }

    public Optional<String> getMessage(TopicPartition topicPartition, long offset) {
        try (var kafkaConsumer = kafkaConsumerPool.getConsumerConnection()) {
            kafkaConsumer.assign(List.of(topicPartition));
            kafkaConsumer.seek(topicPartition, offset);
            ConsumerRecords<byte[], byte[]> poll = kafkaConsumer.poll(Duration.ofSeconds(1));
            return poll.records(topicPartition).stream()
                    .filter(record -> record.offset() == offset)
                    .findFirst()
                    .map(record -> new String(record.value()));
        }
    }

    public List<ConsumerRecord<byte[], byte[]>> getMessages(Function<ConsumerRecord<byte[], byte[]>, Boolean> recordPicker,
                                                            TopicPartition topicPartition,
                                                            Long startOffset,
                                                            Long endOffset) {
        long time = System.currentTimeMillis();
        System.out.println("Startin find for " + topicPartition);
        try (var kafkaConsumer = kafkaConsumerPool.getConsumerConnection()) {
            System.out.println("Startin find for with connection" + topicPartition);
            kafkaConsumer.assign(List.of(topicPartition));
            kafkaConsumer.seek(topicPartition, startOffset);
            var lastRecord = 0L;
            var returnSize = 0L;
            var messages = new ArrayList<ConsumerRecord<byte[], byte[]>>();
            System.out.println("Consumer ready for find " + topicPartition);
            do {
                ConsumerRecords<byte[], byte[]> poll = kafkaConsumer.poll(Duration.ofMillis(50));
                System.out.println("Consumer pulling for " + topicPartition + " records number: " + poll.count());
                var recordIterator = poll.iterator();
                ConsumerRecord<byte[], byte[]> record = null;
                while (recordIterator.hasNext()) {
                    record = recordIterator.next();
                    if (recordPicker.apply(record)) {
                        messages.add(record);
                        returnSize += record.serializedKeySize() + record.serializedValueSize();
                    }
                }
                if (returnSize > bytesReturnLimit) throw new MessageToBig(bytesReturnLimit);
                if (record != null) lastRecord = record.offset();
            } while (lastRecord < endOffset || lastRecord == 0);
            System.out.println("Time processing partition " + topicPartition + " offsets " + startOffset + "/" + endOffset + " time: " + ((System.currentTimeMillis() - time) / 1000.0));
            return messages;
        }
    }

    public List<ConsumerRecord<byte[], byte[]>> getMessages(Function<ConsumerRecord<byte[], byte[]>, Boolean> recordPicker,
                                                            Map<TopicPartition, SearchDetails> searchDetails) {

        long time = System.currentTimeMillis();
        var topic = searchDetails.keySet().stream().findAny().get().topic();
        try (var kafkaConsumer = kafkaConsumerPool.getConsumerConnection()) {
            Set<TopicPartition> currentSearchPartitions = new HashSet<>(searchDetails.keySet());
            kafkaConsumer.assign(currentSearchPartitions);
            searchDetails.forEach((key, value) -> kafkaConsumer.seek(key, value.startOffset));

            var lastRecordMap = new HashMap<Integer, Long>();
            var returnSize = 0L;
            var messages = new ArrayList<ConsumerRecord<byte[], byte[]>>();
            do {
                ConsumerRecords<byte[], byte[]> poll = kafkaConsumer.poll(Duration.ofMillis(50));
                for (ConsumerRecord<byte[], byte[]> record : poll) {
                    if (recordPicker.apply(record)) {
                        messages.add(record);
                        returnSize += record.serializedKeySize() + record.serializedValueSize();
                    }
                    lastRecordMap.put(record.partition(), record.offset());
                }
                if (returnSize > bytesReturnLimit) throw new MessageToBig(bytesReturnLimit);
                lastRecordMap.forEach((key, value) -> {
                    TopicPartition topicPartition = new TopicPartition(topic, key);
                    if (searchDetails.get(topicPartition).endOffset - 1 <= value && kafkaConsumer.assignment().contains(topicPartition)) {
                        System.out.println("Removing " + topicPartition);
                        var newAssignments = kafkaConsumer.assignment().stream().filter(it -> !it.equals(topicPartition)).collect(Collectors.toList());
                        kafkaConsumer.assign(newAssignments);
                    }
                });

            } while (!kafkaConsumer.assignment().isEmpty());
            System.out.println("Time processing partition " + topic + " time: " + ((System.currentTimeMillis() - time) / 1000.0));
            return messages;
        }
    }

    public static class SearchDetails {
        public final Long startOffset;
        public final Long endOffset;

        public SearchDetails(Long startOffset, Long endOffset) {
            this.startOffset = startOffset;
            this.endOffset = endOffset;
        }
    }

}

class MessageToBig extends RuntimeException {
    public MessageToBig(long limit) {
        super("Messages exited limit of " + limit);
    }
}















