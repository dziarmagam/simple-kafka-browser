package kafka.browser.admin;

import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.common.TopicPartition;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import kafka.browser.connection.KafkaConsumerPool;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class KafkaTopicOffsetFinderTest {

    @Test
    void findLastOffsets_shouldReturnOffsetsForGivenPartition() {
        var consumerPool = mock(KafkaConsumerPool.class);
        var consumer = mock(Consumer.class);
        String topicName = "topic";
        var topicPartition1 = new TopicPartition(topicName, 1);
        var topicPartition2 = new TopicPartition(topicName, 2);
        long partitionOffset1 = 50L;
        long partitionOffset2 = 30L;
        var offsets = new LinkedHashMap<>();
        offsets.put(topicPartition1, partitionOffset1);
        offsets.put(topicPartition2, partitionOffset2);
        when(consumerPool.getConsumerConnection()).thenReturn(consumer);
        when(consumer.endOffsets(List.of(topicPartition1, topicPartition2))).thenReturn(offsets);
        //given
        var result = new KafkaTopicOffsetFinder(consumerPool).findLastOffsets(topicName, List.of(1, 2));
        //then
        Assertions.assertThat(result.offsetSum).isEqualTo(partitionOffset1 + partitionOffset2);
        Assertions.assertThat(result.offsets).containsExactly(partitionOffset1, partitionOffset2);
    }

    @Test
    void findLastOffsets_shouldReturnOffsetsForGivenPartitions() {
        var consumerPool = mock(KafkaConsumerPool.class);
        var consumer = mock(Consumer.class);
        var topicPartition1 = new TopicPartition("topic1", 1);
        var topicPartition2 = new TopicPartition("topic2", 1);
        long partitionOffset1 = 50L;
        long partitionOffset2 = 30L;
        var offsets = Map.of(
                topicPartition1, partitionOffset1,
                topicPartition2, partitionOffset2
        );
        when(consumerPool.getConsumerConnection()).thenReturn(consumer);
        when(consumer.endOffsets(List.of(topicPartition1, topicPartition2)))
                .thenReturn(offsets);
        //given
        var result = new KafkaTopicOffsetFinder(consumerPool).findLastOffsets(List.of(topicPartition1, topicPartition2));
        //then
        Assertions.assertThat(result).hasSize(2);
        assertOffsetInformation(partitionOffset1, result, 0, "topic1");
        assertOffsetInformation(partitionOffset2, result, 1, "topic2");
    }

    private void assertOffsetInformation(long partitionOffset1, List<KafkaTopicOffsetFinder.OffsetInfoWithTopic> result, int i, String topic1) {
        Assertions.assertThat(result.get(i).topicName).isEqualTo(topic1);
        Assertions.assertThat(result.get(i).offsets).containsExactly(partitionOffset1);
        Assertions.assertThat(result.get(i).offsetSum).isEqualTo(partitionOffset1);
    }
}