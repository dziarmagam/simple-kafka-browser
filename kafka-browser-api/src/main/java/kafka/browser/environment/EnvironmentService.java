package kafka.browser.environment;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import kafka.browser.config.Config;

@Component
public class EnvironmentService {

    private static final Gson GSON = new GsonBuilder().create();

    private final List<Environment> environments;

    public EnvironmentService(Config config) throws IOException {
        environments = loadEnvironments(config.getEnvironmentFilePath());
    }

    public List<Environment> getEnvironments() {
        return environments;
    }

    private List<Environment> loadEnvironments(String environmentsFilePath) throws IOException {
        String filePath = Files.readString(Paths.get(environmentsFilePath));
        TypeToken<List<Environment>> typeToken = new TypeToken<>() {};
        return GSON.fromJson(filePath, typeToken.getType());
    }


}
