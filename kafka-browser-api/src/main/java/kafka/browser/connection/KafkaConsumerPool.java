package kafka.browser.connection;

import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.serialization.Serdes;

import java.io.Closeable;
import java.io.IOException;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Properties;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.stream.Collectors;

import kafka.browser.config.Config;
import kafka.browser.environment.Environment;


public class KafkaConsumerPool implements Closeable {
    private final Config config;
    private final String bootstrapServer;
    private final BlockingQueue<KafkaConsumerConnection> availableConnections;
    private final List<KafkaConsumerConnection> connections = new ArrayList<>();

    public KafkaConsumerPool(Config config, Environment environment) {
        this.config = config;
        this.availableConnections = new ArrayBlockingQueue<>(config.getConnectionPoolSize());
        this.bootstrapServer = environment.bootstrapServer;
        initConnectionPool(environment);
    }

    public Consumer<byte[], byte[]> getConsumerConnection() {
        try {
            return availableConnections.take();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    public List<String> getAvailableConsumersNames() {
        return availableConnections.stream()
                .map(this::extractConsumerId)
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
    }


    @Override
    public void close() throws IOException {
        connections.forEach(KafkaConsumerConnection::closeRealConnection);
    }

    private String extractConsumerId(KafkaConsumer kafkaConsumer) {
        try {
            Field clientId = KafkaConsumer.class.getDeclaredField("clientId");
            clientId.setAccessible(true);
            return (String) clientId.get(kafkaConsumer);
        } catch (NoSuchFieldException | IllegalAccessException e) {
            e.printStackTrace();
            return null;
        }
    }

    private void initConnectionPool(Environment env) {
        for (int i = 0; i < config.getConnectionPoolSize(); i++) {
            var connection = new KafkaConsumerConnection(createProperties(config, env, i + "_" + env.name));
            availableConnections.add(connection);
            connections.add(connection);
        }
    }

    private Properties createProperties(Config config, Environment env, String clientSuffix) {
        Properties properties = new Properties();
        properties.put("bootstrap.servers", bootstrapServer);
        properties.put("client.id", config.getClientId() + "_" + clientSuffix);
        properties.put("group.id", config.getClientId() + "_" + clientSuffix);
        properties.put("security.protocol", "SASL_SSL");
        properties.put("sasl.mechanism", "PLAIN");
        if ((env.username != null && !env.username.isBlank() && (env.password != null && !env.password.isBlank()))) {
            properties.put("sasl.jaas.config", "org.apache.kafka.common.security.plain.PlainLoginModule   required username='" + env.username + "'   password='" + env.password + "';");
        }
        return properties;
    }


    private class KafkaConsumerConnection extends KafkaConsumer<byte[], byte[]> {

        public KafkaConsumerConnection(Properties properties) {
            super(properties, Serdes.ByteArray().deserializer(), Serdes.ByteArray().deserializer());
        }

        @Override
        public void close() {
            try {
                availableConnections.put(this);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        private void closeRealConnection() {
            super.close();
        }
    }
}
