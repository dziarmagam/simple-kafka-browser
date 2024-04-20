package kafka.browser.connection;

import org.junit.jupiter.api.Test;

import java.util.List;

import kafka.browser.config.Config;
import kafka.browser.environment.Environment;

import static org.assertj.core.api.Assertions.assertThat;

class KafkaConsumerPoolTest {

    @Test
    void shouldReturnConsumerConnection() {
        //given
        String clientId = "clientId";
        Config config = new Config("filePath", clientId, 3, 100);
        String envName = "test";
        Environment environment = new Environment("localhost:9911", envName, false,"user","pass");
        var kafkaConsumerPool = new KafkaConsumerPool(config, environment);
        //when
        try (var connection = kafkaConsumerPool.getConsumerConnection()) {
            //then
            assertThat(connection).isNotNull();
        }
    }

    @Test
    void shouldReleaseConnectionAfterConnectionIsUsed() {
        //given
        String clientId = "clientId";
        Config config = new Config("filePath", clientId, 3, 100);
        String envName = "test";
        Environment environment = new Environment("localhost:9911", envName, false, "user" , "pass");
        var kafkaConsumerPool = new KafkaConsumerPool(config, environment);
        //when
        try (var connection = kafkaConsumerPool.getConsumerConnection()) {
            assertThat(connection).isNotNull();
            assertThat(kafkaConsumerPool.getAvailableConsumersNames().size()).isEqualTo(2);
        }
        assertThat(kafkaConsumerPool.getAvailableConsumersNames().size()).isEqualTo(3);
    }

    @Test
    void shouldReturnAvailableConnectionsNames() {
        //given
        String clientId = "clientId";
        Config config = new Config("filePath", clientId, 3, 100);
        String envName = "test";
        Environment environment = new Environment("localhost:9911", envName, false, "user" , "pass");
        var kafkaConsumerPool = new KafkaConsumerPool(config, environment);
        //when
        List<String> consumerNames = kafkaConsumerPool.getAvailableConsumersNames();
        //then
        assertThat(consumerNames)
                .containsExactly(
                        clientId + "_0_" + envName,
                        clientId + "_1_" + envName,
                        clientId + "_2_" + envName
                );
    }
}