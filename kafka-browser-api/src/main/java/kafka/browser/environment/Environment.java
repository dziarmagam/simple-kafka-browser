package kafka.browser.environment;

import java.util.Objects;

public class Environment {

    public final String bootstrapServer;
    public final String name;
    public final String username;
    public final String password;

    private final Boolean isModifiable;

    public Environment(String bootstrapServer, String name, Boolean isModifiable, String username, String password) {
        this.bootstrapServer = bootstrapServer;
        this.name = name;
        this.isModifiable = isModifiable;
        this.username = username;
        this.password = password;
    }

    public Boolean isModifiable() {
        return isModifiable != null ? isModifiable : false;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Environment that = (Environment) o;
        return Objects.equals(bootstrapServer, that.bootstrapServer) && Objects.equals(name, that.name) && Objects.equals(username, that.username) && Objects.equals(password, that.password) && Objects.equals(isModifiable, that.isModifiable);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bootstrapServer, name, username, password, isModifiable);
    }
}
