//package kafka.monitor.admin;
//
//import org.apache.kafka.clients.admin.AdminClient;
//import org.apache.kafka.clients.admin.ConsumerGroupListing;
//import org.apache.kafka.clients.admin.DescribeTopicsResult;
//import org.apache.kafka.clients.admin.ListConsumerGroupOffsetsResult;
//import org.apache.kafka.clients.admin.ListConsumerGroupsResult;
//import org.apache.kafka.clients.admin.ListTopicsResult;
//import org.apache.kafka.clients.admin.TopicDescription;
//import org.apache.kafka.clients.consumer.OffsetAndMetadata;
//import org.apache.kafka.common.KafkaFuture;
//import org.apache.kafka.common.TopicPartition;
//import org.apache.kafka.common.TopicPartitionInfo;
//import org.apache.kafka.common.internals.KafkaFutureImpl;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//import java.util.Arrays;
//import java.util.Collection;
//import java.util.Collections;
//import java.util.List;
//import java.util.Map;
//import java.util.Set;
//import java.util.concurrent.ExecutionException;
//import java.util.stream.Collectors;
//
//import kafka.monitor.http.consumergroup.ConsumerGroupDto;
//import kafka.monitor.http.consumergroup.ConsumerGroupDto.PartitionInfo;
//import kafka.monitor.http.topic.TopicDto;
//
//import static kafka.monitor.http.consumergroup.ConsumerGroupDto.Partition;
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.mockito.Mockito.mock;
//import static org.mockito.Mockito.when;
//
//class KafkaAdminServiceTest {
//
//    private final KafkaTopicOffsetFinder kafkaTopicOffsetFinder = mock(KafkaTopicOffsetFinder.class);
//    private final KafkaMessageGetter kafkaMessageGetter = mock(KafkaMessageGetter.class);
//    private final KafkaAdminAdapter kafkaAdminAdapter = mock(KafkaAdminAdapter.class);
//    private KafkaAdminService kafkaAdminService;
//
//    @BeforeEach
//    public void init() {
//        kafkaAdminService = new KafkaAdminService(kafkaTopicOffsetFinder, kafkaMessageGetter, kafkaAdminAdapter);
//    }
//
//    @Test
//    public void getConsumerGroupsNames_shouldReturnConsumerGroupNamesForAllConsumerGroups() {
//        //given
//        var consumerGroupName1 = "consumerGroupName1";
//        var consumerGroupName2 = "consumerGroupName2";
//        givenConsumerGroupNameList(consumerGroupName1, consumerGroupName2);
//        //when
//        List<String> result = kafkaAdminService.getConsumerGroupsNames();
//        //then
//        assertThat(result)
//                .containsExactly(consumerGroupName1, consumerGroupName2);
//    }
//
//    private void givenConsumerGroupNameList(String... consumerGroupName) {
//        when(kafkaAdminAdapter.getConsumerGroupListing()).thenReturn(createConsumerGroupListing(consumerGroupName));
//    }
//
//    @Test
//    public void getConsumerGroup_shouldReturnConsumerGroupDtoForGivenName() {
//        //given
//        var groupName = "groupName";
//        var topicName = "topic";
//        var topicPartition1 = new TopicPartition(topicName, 1);
//        var topicPartition2 = new TopicPartition(topicName, 2);
//        var partitionOffset1 = new OffsetAndMetadata(10);
//        var partitionOffset2 = new OffsetAndMetadata(20);
//        var offsets = Map.of(
//                topicPartition1, partitionOffset1,
//                topicPartition2, partitionOffset2
//        );
//        KafkaTopicOffsetFinder.OffsetInfo offset = new KafkaTopicOffsetFinder.OffsetInfo(50L, List.of(50L));
//        var future = KafkaFutureImpl.completedFuture(offsets);
//        ListConsumerGroupOffsetsResult consumerGroupOffsets = mock(ListConsumerGroupOffsetsResult.class);
//        when(adminClient.listConsumerGroupOffsets(groupName)).thenReturn(consumerGroupOffsets);
//        when(kafkaTopicOffsetFinder.findLastOffsets(topicName, List.of(1))).thenReturn(offset);
//        when(kafkaTopicOffsetFinder.findLastOffsets(topicName, List.of(2))).thenReturn(offset);
//        when(consumerGroupOffsets.partitionsToOffsetAndMetadata()).thenReturn(future);
//        //when
//        ConsumerGroupDto result = kafkaAdminService.getConsumerGroup(groupName);
//        //then
//        assertThat(result.name).isEqualTo(groupName);
//        assertThat(result.topicNames).containsExactly(topicName);
//        assertThat(result.partitions).containsOnly(
//                new PartitionInfo(new Partition("topic-1", 1, topicName, 10L), 40L),
//                new PartitionInfo(new Partition("topic-2", 2, topicName, 20L), 30L)
//        );
//    }
//
//    @Test
//    public void getAllConsumerGroups_shouldReturnAllConsumerGroups() {
//        //given
//        var group1 = "group1";
//        var group2 = "group2";
//        String topicA = "topicA";
//        String topicB = "topicB";
//        givenConsumerGroupOffset(group1, topicA, 1, 5);
//        givenConsumerGroupOffset(group2, topicB, 1, 10);
//        givenConsumerGroupNameList(group1, group2);
//        //when
//        List<ConsumerGroupDto> result = kafkaAdminService.getAllConsumerGroups();
//        //then
//        assertThat(result).hasSize(2);
//        assertSimpleConsumerGroupDto(group1, topicA, result.get(0));
//        assertSimpleConsumerGroupDto(group2, topicB, result.get(1));
//
//    }
//
//    @Test
//    public void getTopic_shouldReturnCorrectTopicInformation() {
//        //given
//        givenTopicInformation("topic", List.of(
//                new TopicPartitionInfo(0, null, Collections.emptyList(), Collections.emptyList())
//        ));
//        givenConsumerGroupNameList();
//        givenPartitionsOffset("topic", List.of(0), 5L);
//        //when
//        TopicDto result = kafkaAdminService.getTopic("topic");
//        //then
//        assertThat(result.name).isEqualTo("topic");
//        assertThat(result.partitionCount).isEqualTo(1);
//        assertThat(result.messages).isEqualTo(5);
//        assertThat(result.partitions).hasSize(1);
//        assertThat(result.partitions.get(0).lastLog).isEqualTo(5);
//        assertThat(result.partitions.get(0).name).isEqualTo("topic_0");
//        assertThat(result.partitions.get(0).partitionNumber).isEqualTo(0);
//    }
//
//    @Test
//    public void getTopic_shouldReturnConsumerGroupConnectedToGivenTopics() {
//        //given
//        givenTopicInformation("topic", Collections.emptyList());
//        givenConsumerGroupNameList("group1", "group2", "group3");
//        givenConsumerGroupOffset("group1", "topic", 1, 5);
//        givenConsumerGroupOffset("group2", "topic", 2, 4);
//        givenConsumerGroupOffset("group3", "topicA", 1, 1);
//        givenPartitionsOffset("topic", Collections.emptyList());
//        //when
//        TopicDto result = kafkaAdminService.getTopic("topic");
//        //then
//        assertThat(result.name).isEqualTo("topic");
//        assertThat(result.consumerGroups).containsOnly("group1", "group2");
//
//    }
//
//    @Test
//    public void getTopics_shouldReturnAllTopicData() {
//        //given
//        givenTopicsNames("topic1", "topic2");
//        givenTopicsInformation(Map.of(
//                "topic1", List.of(
//                        new TopicPartitionInfo(0, null, Collections.emptyList(), Collections.emptyList())
//                ),
//                "topic2", List.of(
//                        new TopicPartitionInfo(0, null, Collections.emptyList(), Collections.emptyList()),
//                        new TopicPartitionInfo(1, null, Collections.emptyList(), Collections.emptyList())
//                )
//
//        ));
//        givenPartitionsOffset("topic1", List.of(0), 5L);
//        givenPartitionsOffset("topic2", List.of(0, 1), 5L, 4L);
//        //when
//        List<TopicDto> result = kafkaAdminService.getTopics();
//        //then
//        assertThat(result).hasSize(2);
//        assertThat(result.get(0).name).isEqualTo("topic1");
//    }
//
//    private void givenTopicsNames(String... topicsNames) {
//        ListTopicsResult listTopicsResult = mock(ListTopicsResult.class);
//        when(listTopicsResult.names()).thenReturn(KafkaFutureImpl.completedFuture(Set.of(topicsNames)));
//        when(adminClient.listTopics()).thenReturn(listTopicsResult);
//    }
//
//    private void givenPartitionsOffset(String topicName, List<Integer> partitions, Long... partitionOffsets) {
//        var sum = Arrays.stream(partitionOffsets).mapToLong(it -> it).sum();
//        var offsetList = Arrays.stream(partitionOffsets).collect(Collectors.toList());
//        KafkaTopicOffsetFinder.OffsetInfo offsetInfo = new KafkaTopicOffsetFinder.OffsetInfo(sum, offsetList);
//        when(kafkaTopicOffsetFinder.findLastOffsets(topicName, partitions)).thenReturn(offsetInfo);
//    }
//
//    private void givenPartitionsOffset(List<TopicPartition> topicPartitions, ) {
//        var sum = Arrays.stream(partitionOffsets).mapToLong(it -> it).sum();
//        var offsetList = Arrays.stream(partitionOffsets).collect(Collectors.toList());
//        KafkaTopicOffsetFinder.OffsetInfo offsetInfo = new KafkaTopicOffsetFinder.OffsetInfo(sum, offsetList);
//        when(kafkaTopicOffsetFinder.findLastOffsets(topicName, partitions)).thenReturn(offsetInfo);
//    }
//
//    private void givenTopicInformation(String topicName, List<TopicPartitionInfo> partitionInfoList) {
//        var kafkaFuture = KafkaFutureImpl.completedFuture(Map.of(
//                topicName, new TopicDescription(topicName, false, partitionInfoList)
//        ));
//        DescribeTopicsResult topicsResult = mock(DescribeTopicsResult.class);
//        when(adminClient.describeTopics(List.of(topicName))).thenReturn(topicsResult);
//        when(topicsResult.all()).thenReturn(kafkaFuture);
//    }
//
//    private void givenTopicsInformation(Map<String, List<TopicPartitionInfo>> topicsInfo) {
//        Map<String, TopicDescription> topicDescriptionMap = topicsInfo.entrySet()
//                .stream()
//                .collect(Collectors.toMap(Map.Entry::getKey, this::mapToTopicDescription));
//
//        var kafkaFuture = KafkaFutureImpl.completedFuture(topicDescriptionMap);
//        DescribeTopicsResult topicsResult = mock(DescribeTopicsResult.class);
//        when(adminClient.describeTopics(topicsInfo.keySet())).thenReturn(topicsResult);
//        when(topicsResult.all()).thenReturn(kafkaFuture);
//    }
//
//    private TopicDescription mapToTopicDescription(Map.Entry<String, List<TopicPartitionInfo>> entry) {
//        return new TopicDescription(entry.getKey(), false, entry.getValue());
//    }
//
//    private void assertSimpleConsumerGroupDto(String group, String topic, ConsumerGroupDto result) {
//        assertThat(result.name).isEqualTo(group);
//        assertThat(result.topicNames).containsOnly(topic);
//        assertThat(result.partitions).isNull();
//    }
//
//    private void givenConsumerGroupOffset(String group, String topic, int partition, long offset) {
//        var offsetFuture = mockPartitionOffsetFuture(topic, partition, offset);
//        var consumerGroupOffsets = mock(ListConsumerGroupOffsetsResult.class);
//        when(adminClient.listConsumerGroupOffsets(group)).thenReturn(consumerGroupOffsets);
//        when(consumerGroupOffsets.partitionsToOffsetAndMetadata()).thenReturn(offsetFuture);
//    }
//
//    private KafkaFuture<Map<TopicPartition, OffsetAndMetadata>> mockPartitionOffsetFuture(String topic, int partition, long offset) {
//        var topicPartition1 = new TopicPartition(topic, partition);
//        var partitionOffset1 = new OffsetAndMetadata(offset);
//        var offsets1 = Map.of(
//                topicPartition1, partitionOffset1
//        );
//        return KafkaFutureImpl.completedFuture(offsets1);
//    }
//
//    private List<ConsumerGroupListing> createConsumerGroupListing(String... consumerGroupNames) {
//       return Arrays.stream(consumerGroupNames)
//               .map(name -> new ConsumerGroupListing(name, true))
//               .collect(Collectors.toList());
//    }
//
//}