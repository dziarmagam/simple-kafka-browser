package kafka.browser.admin;

import org.junit.jupiter.api.Test;

import kafka.browser.environment.Environment;

import static org.assertj.core.api.Assertions.assertThat;

class AdminClientCreatorTest {

    @Test
    void getAdminClient() {
        //given
        var environment = new Environment("http://localhost:9092", "test", false);
        //when
        var properties = new AdminClientCreator(environment).createProperties(environment);
        //then
        assertThat(properties)
                .containsEntry("bootstrap.servers", environment.bootstrapServer);
    }
}