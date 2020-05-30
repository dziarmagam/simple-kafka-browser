package kafka.browser.admin;

import org.apache.kafka.clients.admin.AdminClient;
import org.springframework.stereotype.Component;

import java.io.Closeable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import kafka.browser.admin.adapter.DirectKafkaAdminAdapter;
import kafka.browser.admin.service.CachedKafkaAdminService;
import kafka.browser.admin.service.DirectKafkaAdminService;
import kafka.browser.admin.service.KafkaAdminService;
import kafka.browser.config.Config;
import kafka.browser.connection.KafkaConsumerPool;
import kafka.browser.environment.Environment;
import kafka.browser.environment.EnvironmentService;

@Component
public class KafkaAdminServiceManager implements Closeable {

    private final EnvironmentService environmentService;
    private final Map<String, KafkaAdminService> kafkaAdminServiceMap;
    private final static int CLEAN_CONSUMER_INTERVAL = 10000;
    private final List<KafkaConnections> connectionsList = new ArrayList<>();

    private final ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);

    public KafkaAdminServiceManager(EnvironmentService environmentService, Config config) {
        this.environmentService = environmentService;
        this.kafkaAdminServiceMap = createKafkaService(config);
        executor.scheduleAtFixedRate(this::cleanConsumersGroup, 0, CLEAN_CONSUMER_INTERVAL, TimeUnit.MILLISECONDS);
    }

    private void cleanConsumersGroup() {
        for (KafkaConnections connections : connectionsList) {
            connections.adminClient.deleteConsumerGroups(connections.kafkaConsumerPool.getAvailableConsumersNames());
        }
    }

    public KafkaAdminService getService(String name) {
        return kafkaAdminServiceMap.get(name);
    }

    private Map<String, KafkaAdminService> createKafkaService(Config config) {
        return environmentService.getEnvironments().stream()
                .collect(HashMap::new, (map, env) -> map.put(env.name, createService(config, env)), HashMap::putAll);

    }

    private KafkaAdminService createService(Config config, Environment environment) {
        KafkaConsumerPool kafkaConsumerPool = new KafkaConsumerPool(config, environment);
        KafkaTopicOffsetFinder kafkaTopicOffsetFinder = new KafkaTopicOffsetFinder(kafkaConsumerPool);
        KafkaMessageGetter kafkaMessageGetter = new KafkaMessageGetter(kafkaConsumerPool);
        AdminClient adminClient = new AdminClientCreator(environment).getAdminClient();
        DirectKafkaAdminAdapter kafkaAdminAdapter = new DirectKafkaAdminAdapter(adminClient);
        DirectKafkaAdminService directKafkaAdminService = new DirectKafkaAdminService(kafkaTopicOffsetFinder, kafkaMessageGetter, kafkaAdminAdapter, environment.isModifiable());
        connectionsList.add(new KafkaConnections(kafkaConsumerPool, adminClient));
        return new CachedKafkaAdminService(directKafkaAdminService);
    }


    @Override
    public void close() {
        executor.shutdown();
    }

    private class KafkaConnections {
        final KafkaConsumerPool kafkaConsumerPool;
        final AdminClient adminClient;

        private KafkaConnections(KafkaConsumerPool kafkaConsumerPool, AdminClient adminClient) {
            this.kafkaConsumerPool = kafkaConsumerPool;
            this.adminClient = adminClient;
        }
    }
}
