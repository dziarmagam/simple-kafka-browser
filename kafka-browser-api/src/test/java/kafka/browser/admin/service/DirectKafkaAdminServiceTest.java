package kafka.browser.admin.service;

import org.apache.kafka.clients.admin.ConsumerGroupListing;
import org.apache.kafka.clients.admin.TopicDescription;
import org.apache.kafka.clients.consumer.OffsetAndMetadata;
import org.apache.kafka.common.Node;
import org.apache.kafka.common.TopicPartition;
import org.apache.kafka.common.TopicPartitionInfo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import kafka.browser.admin.KafkaMessageGetter;
import kafka.browser.admin.KafkaMessageSender;
import kafka.browser.admin.KafkaTopicOffsetFinder;
import kafka.browser.admin.adapter.DirectKafkaAdminAdapter;
import kafka.browser.http.consumergroup.ConsumerGroupDto;
import kafka.browser.http.topic.TopicDto;

import static kafka.browser.http.consumergroup.ConsumerGroupDto.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class DirectKafkaAdminServiceTest {

    private KafkaTopicOffsetFinder kafkaTopicOffsetFinder = mock(KafkaTopicOffsetFinder.class);
    private KafkaMessageGetter kafkaMessageGetter = mock(KafkaMessageGetter.class);
    private DirectKafkaAdminAdapter kafkaAdminAdapter = mock(DirectKafkaAdminAdapter.class);
    private KafkaMessageSender kafkaMessageSender = mock(KafkaMessageSender.class);
    private DirectKafkaAdminService directKafkaAdminService = new DirectKafkaAdminService(
            kafkaTopicOffsetFinder, kafkaMessageGetter, kafkaAdminAdapter, kafkaMessageSender, true
    );


    @Test
    void shouldReturnConsumerGroupNames() {
        //given
        when(kafkaAdminAdapter.getConsumerGroupListing()).thenReturn(List.of(
                new ConsumerGroupListing("group1", false),
                new ConsumerGroupListing("group2", false)
        ));
        //when
        List<String> consumerGroupsNames = directKafkaAdminService.getConsumerGroupsNames();
        //then
        assertThat(consumerGroupsNames)
                .containsExactly("group1", "group2");
    }

    @Test
    void shouldReturnConsumerGroupDetails() {
        //given
        var name = "consumerGroupName";
        var topicPartition10 = new TopicPartition("topic1", 0);
        var topicPartition11 = new TopicPartition("topic1", 1);
        var topicPartition20 = new TopicPartition("topic2", 0);
        var cgOffsets = Map.of(
                topicPartition10, new OffsetAndMetadata(10),
                topicPartition11, new OffsetAndMetadata(5),
                topicPartition20, new OffsetAndMetadata(0)
        );
        var topicOffsets = List.of(
                new KafkaTopicOffsetFinder.OffsetInfoWithTopic(20, List.of(10L, 10L), "topic1"),
                new KafkaTopicOffsetFinder.OffsetInfoWithTopic(10, List.of(10L), "topic2")
        );
        when(kafkaAdminAdapter.getConsumerGroupOffsets(name)).thenReturn(cgOffsets);
        when(kafkaTopicOffsetFinder.findLastOffsets(List.of(topicPartition10, topicPartition11, topicPartition20)))
                .thenReturn(topicOffsets);
        //when
        ConsumerGroupDto consumerGroup = directKafkaAdminService.getConsumerGroup(name);
        //then
        assertThat(consumerGroup.name).isEqualTo(name);
        assertThat(consumerGroup.topicNames).containsExactly("topic1", "topic2");
        assertThat(consumerGroup.partitions).containsOnly(
                new PartitionInfo(new Partition("topic1-0", 0, "topic1", 10L), 0L),
                new PartitionInfo(new Partition("topic1-1", 1, "topic1", 5L), 5L),
                new PartitionInfo(new Partition("topic2-0", 0, "topic2", 0L), 10L)
        );
    }

    @Test
    void shouldReturnAllConsumerGroupsWithoutOffsets() {
        //given
        var name = "consumerGroupName";
        var topicPartition10 = new TopicPartition("topic1", 0);
        var topicPartition11 = new TopicPartition("topic1", 1);
        var topicPartition12 = new TopicPartition("topic2", 1);
        var topicPartition20 = new TopicPartition("topic2", 0);
        var cgOffsets1 = Map.of(
                topicPartition10, new OffsetAndMetadata(10),
                topicPartition11, new OffsetAndMetadata(5),
                topicPartition12, new OffsetAndMetadata(2)
        );
        var cgOffsets2 = Map.of(
                topicPartition20, new OffsetAndMetadata(0)
        );

        when(kafkaAdminAdapter.getConsumerGroupListing()).thenReturn(List.of(
                new ConsumerGroupListing("group1", false),
                new ConsumerGroupListing("group2", false)
        ));
        when(kafkaAdminAdapter.getConsumerGroupOffsets("group1")).thenReturn(cgOffsets1);
        when(kafkaAdminAdapter.getConsumerGroupOffsets("group2")).thenReturn(cgOffsets2);
        //when
        List<ConsumerGroupDto> allConsumerGroups = directKafkaAdminService.getAllConsumerGroups();
        //then
        assertThat(allConsumerGroups).containsOnly(
                new ConsumerGroupDto("group1", Set.of("topic1", "topic2"), null),
                new ConsumerGroupDto("group2", Set.of("topic2"), null)
        );
    }

    @Test
    void shouldReturnConsumerGroupsNamesForGivenTopic() {
        //given
        when(kafkaAdminAdapter.getConsumerGroupListing()).thenReturn(List.of(
                new ConsumerGroupListing("group1", false),
                new ConsumerGroupListing("group2", false)
        ));
        Map<TopicPartition, OffsetAndMetadata> offsets1 = Map.of(
                new TopicPartition("topic1", 0), new OffsetAndMetadata(0),
                new TopicPartition("topic1", 1), new OffsetAndMetadata(0)
        );
        Map<TopicPartition, OffsetAndMetadata> offsets2 = Map.of(
                new TopicPartition("topic1", 0), new OffsetAndMetadata(0),
                new TopicPartition("topic2", 0), new OffsetAndMetadata(0)
        );
        when(kafkaAdminAdapter.getConsumerGroupOffsets("group1")).thenReturn(offsets1);
        when(kafkaAdminAdapter.getConsumerGroupOffsets("group2")).thenReturn(offsets2);
        //when
        List<String> consumerGroups = directKafkaAdminService.getConsumerGroupsForGivenTopic("topic1");
        //then
        assertThat(consumerGroups).containsOnly("group1", "group2");

    }

    @Test
    void shouldReturnTopicDetails() {
        //then
        String topicName = "topic1";
        TopicDescription topic1 = new TopicDescription(topicName, false, List.of(
                new TopicPartitionInfo(0, Node.noNode(), List.of(), List.of()),
                new TopicPartitionInfo(1, Node.noNode(), List.of(), List.of())
        ));
        KafkaTopicOffsetFinder.OffsetInfo offsetInfo = new KafkaTopicOffsetFinder.OffsetInfo(15, List.of(5L, 10L));
        when(kafkaAdminAdapter.describeTopic(topicName)).thenReturn(topic1);
        when(kafkaTopicOffsetFinder.findLastOffsets(topicName, List.of(0, 1))).thenReturn(offsetInfo);
        //when
        TopicDto topic = directKafkaAdminService.getTopic(topicName);
        //then
        assertThat(topic.messages).isEqualTo(15);
        assertThat(topic.name).isEqualTo(topicName);
        assertThat(topic.partitionCount).isEqualTo(2);
        assertThat(topic.partitions).containsOnly(
                new TopicDto.PartitionInfo("topic1-0", 0, 5),
                new TopicDto.PartitionInfo("topic1-1", 1, 10)
        );
    }

    @Test
    void shouldReturnAllTopicsDetails() {
        //given
        TopicDescription topic1 = new TopicDescription("topic1", false, List.of(
                new TopicPartitionInfo(0, Node.noNode(), List.of(), List.of()),
                new TopicPartitionInfo(1, Node.noNode(), List.of(), List.of())
        ));
        TopicDescription topic2 = new TopicDescription("topic2", false, List.of(
                new TopicPartitionInfo(0, Node.noNode(), List.of(), List.of())
        ));
        List<TopicPartition> topicsPartitions = List.of(
                new TopicPartition("topic1", 0),
                new TopicPartition("topic1", 1),
                new TopicPartition("topic2", 0)
        );
        List<KafkaTopicOffsetFinder.OffsetInfoWithTopic> offsetInfoWithTopics =
                List.of(
                        new KafkaTopicOffsetFinder.OffsetInfoWithTopic(15, List.of(10L, 5L), "topic1"),
                        new KafkaTopicOffsetFinder.OffsetInfoWithTopic(25, List.of(25L), "topic2")
                );
        var topicDescriptions = new LinkedHashMap<String, TopicDescription>();
        topicDescriptions.put("topic1", topic1);
        topicDescriptions.put("topic2", topic2);

        when(kafkaAdminAdapter.getTopicNames()).thenReturn(Set.of("topic1", "topic2"));
        when(kafkaAdminAdapter.describeTopics(Set.of("topic1", "topic2"))).thenReturn(topicDescriptions);
        when(kafkaTopicOffsetFinder.findLastOffsets(topicsPartitions)).thenReturn(offsetInfoWithTopics);
        //when
        List<TopicDto> topics = directKafkaAdminService.getTopics();
        //then
        assertThat(topics).containsOnly(
                new TopicDto("topic1", 15, 2, List.of(
                        new TopicDto.PartitionInfo("topic1-0", 0, 10L),
                        new TopicDto.PartitionInfo("topic1-1", 1, 5L)
                )),
                new TopicDto("topic2", 25, 1, List.of(new TopicDto.PartitionInfo("topic2-0", 0, 25L)))
        );
    }

    @Test
    void shouldReturnTopicNames() {
        //given
        Set<String> topic1 = Set.of("topic1", "topic2");
        when(kafkaAdminAdapter.getTopicNames()).thenReturn(topic1);
        //when
        Set<String> topicNames = kafkaAdminAdapter.getTopicNames();
        //then
        assertThat(topicNames).containsOnly("topic1", "topic2");
    }

    @Test
    void shouldThrowActionNotAllowExceptionWhenDeleteIsNotAllowed() {
        //given
        DirectKafkaAdminService directKafkaAdminService =
                new DirectKafkaAdminService(kafkaTopicOffsetFinder, kafkaMessageGetter, kafkaAdminAdapter, kafkaMessageSender, false);
        //then
        try {
            directKafkaAdminService.deleteConsumerGroup("consumerGroup");
            Assertions.fail("ActionNotAllowed was not thrown");
        } catch (ActionNotAllowed e) {
            assertThat(e).hasMessageContaining("consumer group consumerGroup deletion");
        }
    }

    @Test
    void shouldThrowActionNotAllowExceptionWhenDeleteTopicIsNotAllowed() {
        //given
        DirectKafkaAdminService directKafkaAdminService =
                new DirectKafkaAdminService(kafkaTopicOffsetFinder, kafkaMessageGetter, kafkaAdminAdapter, kafkaMessageSender, false);
        //when
        try {
            directKafkaAdminService.deleteTopic("topicName");
            Assertions.fail("ActionNotAllowed was not thrown");
        } catch (ActionNotAllowed e) {
            //then
            assertThat(e).hasMessageContaining("topic topicName deletion");
        }
    }

    @Test
    void shouldReturnLastMessage() {
        //given
        TopicPartition topicPartition = new TopicPartition("topic1", 0);
        String expectedMessage = "message";

        when(kafkaMessageGetter.getLastMessage(topicPartition)).thenReturn(expectedMessage);
        //when
        String lastMessage = directKafkaAdminService.getLastMessage(topicPartition);
        //then
        assertThat(lastMessage).isEqualTo(expectedMessage);
    }

    @Test
    void shouldGetMessageForGivenOffset() {
        //given
        long offset = 1;
        TopicPartition topicPartition = new TopicPartition("topic1", 0);

        when(kafkaMessageGetter.getMessage(topicPartition, offset)).thenReturn(Optional.of("message"));
        //when
        Optional<String> message = directKafkaAdminService.getMessage(topicPartition, offset);
        //then
        assertThat(message).contains("message");

    }

    @Test
    void shouldCallCloseOnKafkaAdminAdapterWhenClosingService(){
        //when
        directKafkaAdminService.close();
        //then
        verify(kafkaAdminAdapter, times(1)).close();
    }
}