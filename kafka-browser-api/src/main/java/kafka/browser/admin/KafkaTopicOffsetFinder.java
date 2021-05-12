package kafka.browser.admin;

import org.apache.kafka.clients.consumer.OffsetAndTimestamp;
import org.apache.kafka.common.PartitionInfo;
import org.apache.kafka.common.TopicPartition;

import java.util.*;
import java.util.stream.Collectors;

import kafka.browser.connection.KafkaConsumerPool;


public class KafkaTopicOffsetFinder {

    private final KafkaConsumerPool kafkaConsumerPool;

    public KafkaTopicOffsetFinder(KafkaConsumerPool kafkaConsumerPool) {
        this.kafkaConsumerPool = kafkaConsumerPool;
    }

    public OffsetInfo findLastOffsets(String topic, List<Integer> partitions) {
        try (var kafkaConsumer = kafkaConsumerPool.getConsumerConnection()) {
            List<TopicPartition> topicParitions = partitions.stream()
                    .map(it -> new TopicPartition(topic, it))
                    .collect(Collectors.toList());
            Map<TopicPartition, Long> results = kafkaConsumer.endOffsets(topicParitions);
            List<Long> offsets = results.entrySet().stream()
                    .sorted(Comparator.comparing(e -> e.getKey().toString()))
                    .map(Map.Entry::getValue)
                    .collect(Collectors.toList());
            return new OffsetInfo(offsets.stream().reduce(Long::sum).get(), offsets);
        }
    }

    public List<OffsetInfoWithTopic> findLastOffsets(List<TopicPartition> partitions) {
        try (var kafkaConsumer = kafkaConsumerPool.getConsumerConnection()) {
            Map<TopicPartition, Long> results = kafkaConsumer.endOffsets(partitions);
            return results.entrySet().stream()
                    .collect(Collectors.groupingBy(it -> it.getKey().topic()))
                    .entrySet()
                    .stream()
                    .map(offsets -> extractOffsetInfo(offsets.getKey(), offsets.getValue(), partitions.stream()
                            .filter(part -> part.topic().equals(offsets.getKey()))
                            .collect(Collectors.toList())))
                    .collect(Collectors.toList());
        }
    }

    public Map<TopicPartition, OffsetAndTimestamp> findOffsetByTime(String topic, long timestamp) {
        try (var kafkaConsumer = kafkaConsumerPool.getConsumerConnection()) {
            List<PartitionInfo> partitionInfos = kafkaConsumer.partitionsFor(topic);
            var partitions = partitionInfos.stream()
                    .map(it -> new TopicPartition(it.topic(), it.partition()))
                    .collect(Collectors.toList());
            var map = new HashMap<TopicPartition, Long>();
            partitions.forEach(tp -> map.put(tp, timestamp));
            return kafkaConsumer.offsetsForTimes(map);
        }
    }

    private OffsetInfoWithTopic extractOffsetInfo(String topic, List<Map.Entry<TopicPartition, Long>> partitionsData, List<TopicPartition> expectedPartitions) {
        var offsets = expectedPartitions.stream()
                .sorted(Comparator.comparing(TopicPartition::partition))
                .map(partition -> partitionsData.stream()
                        .filter(it -> it.getKey().equals(partition))
                        .findFirst()
                        .map(Map.Entry::getValue)
                        .orElse(0L))
                .collect(Collectors.toList());

        var sum = offsets.stream().mapToLong(it -> it).sum();
        return new OffsetInfoWithTopic(sum, offsets, topic);
    }

    public static class OffsetInfoWithTopic {
        public final String topicName;
        public final long offsetSum;
        public final List<Long> offsets;

        public OffsetInfoWithTopic(long offsetSum, List<Long> offsets, String topicName) {
            this.offsetSum = offsetSum;
            this.offsets = offsets;
            this.topicName = topicName;
        }

        @Override
        public String toString() {
            return "OffsetInfoWithTopic{" +
                    "topicName='" + topicName + '\'' +
                    ", offsetSum=" + offsetSum +
                    ", offsets=" + offsets +
                    '}';
        }
    }

    public static class OffsetInfo {
        public final long offsetSum;
        public final List<Long> offsets;

        public OffsetInfo(long offsetSum, List<Long> offsets) {
            this.offsetSum = offsetSum;
            this.offsets = offsets;
        }
    }
}
