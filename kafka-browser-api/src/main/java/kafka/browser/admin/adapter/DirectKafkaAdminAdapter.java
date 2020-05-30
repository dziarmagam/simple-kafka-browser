package kafka.browser.admin.adapter;

import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.clients.admin.ConsumerGroupDescription;
import org.apache.kafka.clients.admin.ConsumerGroupListing;
import org.apache.kafka.clients.admin.TopicDescription;
import org.apache.kafka.clients.consumer.OffsetAndMetadata;
import org.apache.kafka.common.TopicPartition;

import java.time.Duration;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ExecutionException;

public class DirectKafkaAdminAdapter implements KafkaAdminAdapter {

    private final AdminClient adminClient;


    public DirectKafkaAdminAdapter(AdminClient adminClient) {
        this.adminClient = adminClient;
    }

    @Override
    public Collection<ConsumerGroupListing> getConsumerGroupListing() {
        try {
            return adminClient.listConsumerGroups().all().get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Map<TopicPartition, OffsetAndMetadata> getConsumerGroupOffsets(String consumerGroupName) {
        try {
            return adminClient.listConsumerGroupOffsets(consumerGroupName)
                    .partitionsToOffsetAndMetadata()
                    .get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public TopicDescription describeTopic(String topicName) {
        try {
            return adminClient.describeTopics(List.of(topicName)).values()
                    .get(topicName)
                    .get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Map<String, TopicDescription> describeTopics(Collection<String> topicNames) {
        try {
            return adminClient.describeTopics(topicNames).all().get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Set<String> getTopicNames() {
        try {
            return adminClient.listTopics().names().get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public ConsumerGroupDescription describeConsumerGroup(String consumerGroupName) {
        try {
            return adminClient.describeConsumerGroups(List.of(consumerGroupName)).all().get().get(consumerGroupName);
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteConsumerGroup(String consumerGroupName) {
        try {
            adminClient.deleteConsumerGroups(List.of(consumerGroupName)).all().get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteTopic(String topicName) {
        try {
            adminClient.deleteTopics(List.of(topicName)).all().get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }


    @Override
    public void close() {
        adminClient.close(Duration.ofMinutes(1));
    }
}
