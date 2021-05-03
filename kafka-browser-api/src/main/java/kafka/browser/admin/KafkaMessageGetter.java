package kafka.browser.admin;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.common.TopicPartition;

import java.time.Duration;
import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import kafka.browser.connection.KafkaConsumerPool;


public class KafkaMessageGetter {

    private final KafkaConsumerPool kafkaConsumerPool;

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

    public List<byte[]> getMessagesWithKey(TopicPartition topicPartition, String key, Instant time, Long endOffset) {
        try (var kafkaConsumer = kafkaConsumerPool.getConsumerConnection()) {
            var offsetAndTime = kafkaConsumer.offsetsForTimes(Map.of(topicPartition, time.getEpochSecond()));
            var offset = offsetAndTime.get(topicPartition).offset();
            kafkaConsumer.seek(topicPartition, offset);
            var lastRecord = 0L;
            var messages = new ArrayList<byte[]>();
            do {
                ConsumerRecords<byte[], byte[]> poll = kafkaConsumer.poll(Duration.ofSeconds(1));
                var recordIterator = poll.iterator();
                ConsumerRecord<byte[], byte[]> record = null;
                while (recordIterator.hasNext()) {
                    record = recordIterator.next();
                    if (new String(record.key()).equals(key)) {
                        messages.add(record.value());
                    }
                }
                if (record != null) lastRecord = record.offset();
            } while (lastRecord < endOffset || lastRecord != 0);
            return messages;
        }
    }
}
