package kafka.browser.admin;

import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.common.TopicPartition;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import kafka.browser.connection.KafkaConsumerPool;

import static org.mockito.Mockito.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class KafkaMessageGetterTest {

    @Test
    public void shouldReturnLastMessage() {
        //given
        var consumerPool = mock(KafkaConsumerPool.class);
        var consumer = mock(Consumer.class);
        var topicPartition = new TopicPartition("topic", 1);
        var expectedMessage = "expectedMessage";
        var consumerRecords = new ConsumerRecords<>(Map.of(topicPartition, List.of(
                new ConsumerRecord<>(topicPartition.topic(), topicPartition.partition(), 0, new byte[]{}, expectedMessage.getBytes()))
        ));
        when(consumerPool.getConsumerConnection()).thenReturn(consumer);
        when(consumer.poll(any())).thenReturn(consumerRecords);
        when(consumer.endOffsets(List.of(topicPartition))).thenReturn(Map.of(topicPartition, 1L));
        //when
        String message = new KafkaMessageGetter(consumerPool)
                .getLastMessage(topicPartition);
        //then
        Assertions.assertThat(message)
                .isEqualTo(expectedMessage);
    }

    @Test
    public void shouldReturnMessage() {
        //given
        var consumerPool = mock(KafkaConsumerPool.class);
        var consumer = mock(Consumer.class);
        var topicPartition = new TopicPartition("topic", 1);
        var expectedMessage = "expectedMessage";
        var otherMessage = "otherMessage";
        var consumerRecords = new ConsumerRecords<>(Map.of(topicPartition, List.of(
                new ConsumerRecord<>(topicPartition.topic(), topicPartition.partition(), 0, new byte[]{}, otherMessage.getBytes()),
                new ConsumerRecord<>(topicPartition.topic(), topicPartition.partition(), 1, new byte[]{}, expectedMessage.getBytes()),
                new ConsumerRecord<>(topicPartition.topic(), topicPartition.partition(), 2, new byte[]{}, otherMessage.getBytes())
                )

        ));
        when(consumerPool.getConsumerConnection()).thenReturn(consumer);
        when(consumer.poll(any())).thenReturn(consumerRecords);
        //when
        var message = new KafkaMessageGetter(consumerPool)
                .getMessage(topicPartition, 1);
        //then
        Assertions.assertThat(message)
                .contains(expectedMessage);
    }

}