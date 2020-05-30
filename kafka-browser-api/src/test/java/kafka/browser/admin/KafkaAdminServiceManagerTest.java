package kafka.browser.admin;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

import kafka.browser.admin.service.KafkaAdminService;
import kafka.browser.config.Config;
import kafka.browser.environment.Environment;
import kafka.browser.environment.EnvironmentService;


class KafkaAdminServiceManagerTest {

    @Test
    void shouldReturnService() {
        //given
        Config config = new Config("filePath", "clientId", 100, 100);
        EnvironmentService environmentService = Mockito.mock(EnvironmentService.class);
        Mockito.when(environmentService.getEnvironments()).thenReturn(List.of(new Environment("localhost:9911", "test", false)));
        final var kafkaAdminServiceManager = new KafkaAdminServiceManager(environmentService, config);
        final var expectedService = Mockito.mock(KafkaAdminService.class);
        //when
        KafkaAdminService someService = kafkaAdminServiceManager.getService("test");
        //then
        Assertions.assertThat(someService).isNotNull();

    }

    @Test
    void shouldReturnNullWhenServiceIsNotPresent() {
        //given
        Config config = new Config("filePath", "clientId", 100, 100);
        EnvironmentService environmentService = Mockito.mock(EnvironmentService.class);
        var kafkaAdminServiceManager = new KafkaAdminServiceManager(environmentService, config);
        //when
        KafkaAdminService someService = kafkaAdminServiceManager.getService("someService");
        //then
        Assertions.assertThat(someService).isNull();

    }
}