package kafka.browser.environment;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Paths;
import java.util.List;

import kafka.browser.config.Config;

class EnvironmentServiceTest {

    @Test
    public void getEnvironment() throws IOException, URISyntaxException {
        //given
        var environmentFile = Paths.get(getClass().getResource("environments.json").toURI()).toFile();
        var absolutePathFile = environmentFile.getAbsolutePath();
        var config = new Config(absolutePathFile, "testId", 1, 123);
        var environmentService = new EnvironmentService(config);
        //when
        List<Environment> environments = environmentService.getEnvironments();
        //then
        Assertions.assertThat(environments)
                .containsExactly(
                        new Environment("testServer1", "name1", false, "username" , "password"),
                        new Environment("testServer2", "name2", true, "username" , "password")
                );
    }

}