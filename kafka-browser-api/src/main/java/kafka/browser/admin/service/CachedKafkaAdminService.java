package kafka.browser.admin.service;

import org.apache.kafka.common.TopicPartition;
import org.springframework.beans.factory.annotation.Qualifier;

import java.io.IOException;
import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

import javax.annotation.PreDestroy;

import kafka.browser.http.consumergroup.ConsumerGroupDto;
import kafka.browser.http.consumergroup.ConsumerGroupMetaDataDto;
import kafka.browser.http.topic.TopicDto;

public class CachedKafkaAdminService implements KafkaAdminService {

    private final static int REFRESH_INTERVAL_MS = 30000;

    private final ScheduledExecutorService executor = Executors.newScheduledThreadPool(2);

    private final KafkaAdminService kafkaAdminService;
    private final AtomicReference<List<ConsumerGroupDto>> getAllConsumerGroupsResult = new AtomicReference<>(null);
    private final AtomicReference<List<TopicDto>> getTopicsResult = new AtomicReference<>(null);


    public CachedKafkaAdminService(@Qualifier("direct") KafkaAdminService kafkaAdminService) {
        this.kafkaAdminService = kafkaAdminService;
        startCache();
    }

    private void startCache() {
        executor.scheduleAtFixedRate(() -> getAllConsumerGroupsResult.set(kafkaAdminService.getAllConsumerGroups()), 0, REFRESH_INTERVAL_MS, TimeUnit.MILLISECONDS);
        executor.scheduleAtFixedRate(() -> getTopicsResult.set(kafkaAdminService.getTopics()), 0, REFRESH_INTERVAL_MS, TimeUnit.MILLISECONDS);
    }

    @Override
    public List<String> getConsumerGroupsNames() {
        return this.kafkaAdminService.getConsumerGroupsNames();
    }

    @Override
    public ConsumerGroupDto getConsumerGroup(String name) {
        return this.kafkaAdminService.getConsumerGroup(name);
    }

    @Override
    public ConsumerGroupMetaDataDto getConsumerGroupMetaData(String name) {
        return this.kafkaAdminService.getConsumerGroupMetaData(name);
    }

    @Override
    public List<ConsumerGroupDto> getAllConsumerGroups() {
        if (getAllConsumerGroupsResult.get() == null) {
            return this.kafkaAdminService.getAllConsumerGroups();
        } else {
            return this.getAllConsumerGroupsResult.get();
        }
    }

    @Override
    public TopicDto getTopic(String topicName) {
        return this.kafkaAdminService.getTopic(topicName);
    }

    @Override
    public List<TopicDto> getTopics() {
        if (this.getAllConsumerGroupsResult.get() == null) {
            return this.kafkaAdminService.getTopics();
        } else {
            return getTopicsResult.get();
        }
    }

    @Override
    public void deleteConsumerGroup(String consumerGroupName) {
        this.kafkaAdminService.deleteConsumerGroup(consumerGroupName);
        List<ConsumerGroupDto> newConsumerGroupDtoList = this.getAllConsumerGroupsResult.get()
                .stream()
                .filter(it -> !it.name.equals(consumerGroupName))
                .collect(Collectors.toList());
        this.getAllConsumerGroupsResult.set(newConsumerGroupDtoList);
    }

    @Override
    public String getLastMessage(TopicPartition topicPartition) {
        return this.kafkaAdminService.getLastMessage(topicPartition);
    }

    @Override
    public Optional<String> getMessage(TopicPartition topicPartition, long offset) {
        return this.kafkaAdminService.getMessage(topicPartition, offset);
    }

    @Override
    public void deleteTopic(String topic) {
        this.kafkaAdminService.deleteTopic(topic);
        List<TopicDto> newTopics = this.getTopicsResult.get().stream()
                .filter(it -> !it.name.equals(topic))
                .collect(Collectors.toList());

        this.getTopicsResult.set(newTopics);
    }

    @Override
    public List<String> getConsumerGroupsForGivenTopic(String topicName) {
        return this.kafkaAdminService.getConsumerGroupsForGivenTopic(topicName);
    }

    @Override
    public List<String> getTopicNames() {
        return this.kafkaAdminService.getTopicNames();
    }

    @Override
    public List<String> findMessage(String topic, MessageQuery messageQuery, Instant from, Instant to) {
        return this.kafkaAdminService.findMessage(topic, messageQuery, from, to);
    }

    @Override
    @PreDestroy
    public void close() throws IOException {
        executor.shutdown();
        kafkaAdminService.close();
    }
}
