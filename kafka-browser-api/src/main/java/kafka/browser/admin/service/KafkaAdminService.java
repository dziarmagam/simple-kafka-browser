package kafka.browser.admin.service;

import org.apache.kafka.common.TopicPartition;

import java.io.Closeable;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

import kafka.browser.http.consumergroup.ConsumerGroupDto;
import kafka.browser.http.consumergroup.ConsumerGroupMetaDataDto;
import kafka.browser.http.topic.TopicDto;

public interface KafkaAdminService extends Closeable {

    List<String> getConsumerGroupsNames();

    ConsumerGroupDto getConsumerGroup(String name);

    ConsumerGroupMetaDataDto getConsumerGroupMetaData(String name);

    List<ConsumerGroupDto> getAllConsumerGroups();

    TopicDto getTopic(String topicName);

    List<TopicDto> getTopics();

    void deleteConsumerGroup(String consumerGroupName);

    String getLastMessage(TopicPartition topicPartition);

    Optional<String> getMessage(TopicPartition topicPartition, long offset);

    void deleteTopic(String topic);

    List<String> getConsumerGroupsForGivenTopic(String topicName);

    List<String> getTopicNames();

    void sendMessage(String topic, String key, String message);

    List<String> findMessage(String topic, MessageQuery messageQuery, Instant from, Instant to);
}
