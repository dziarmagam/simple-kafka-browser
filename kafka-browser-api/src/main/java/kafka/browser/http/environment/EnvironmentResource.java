package kafka.browser.http.environment;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import kafka.browser.environment.Environment;
import kafka.browser.environment.EnvironmentService;

@RestController
@CrossOrigin
@RequestMapping("/api/environments")
public class EnvironmentResource {

    private final EnvironmentService environmentService;

    EnvironmentResource(EnvironmentService environmentService) {
        this.environmentService = environmentService;
    }

    @GetMapping
    public List<Environment> getEnvironments() {
        return environmentService.getEnvironments();
    }
}
