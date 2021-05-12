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

    public List<byte[]> getMessages(Function<ConsumerRecord<byte[], byte[]>, Boolean> recordPicker,
                                    TopicPartition topicPartition,
                                    Long startOffset,
                                    Long endOffset) {
        try (var kafkaConsumer = kafkaConsumerPool.getConsumerConnection()) {
            kafkaConsumer.seek(topicPartition, startOffset);
            var lastRecord = 0L;
            var returnSize = 0L;
            var messages = new ArrayList<byte[]>();
            do {
                ConsumerRecords<byte[], byte[]> poll = kafkaConsumer.poll(Duration.ofSeconds(1));
                var recordIterator = poll.iterator();
                ConsumerRecord<byte[], byte[]> record = null;
                while (recordIterator.hasNext()) {
                    record = recordIterator.next();
                    if (recordPicker.apply(record)) {
                        messages.add(record.value());
                        returnSize += record.value().length;
                    }
                }
                if(returnSize > bytesReturnLimit) throw new MessageToBig(bytesReturnLimit);
                if (record != null) lastRecord = record.offset();
            } while (lastRecord < endOffset || lastRecord != 0);
            return messages;
        }
    }
}

class MessageToBig extends RuntimeException {
    public MessageToBig(long limit){
        super("Messages exited limit of " + limit);
    }
}















