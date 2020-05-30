package kafka.browser.admin;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.common.TopicPartition;

import java.time.Duration;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

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
}
