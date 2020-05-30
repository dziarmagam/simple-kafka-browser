package kafka.browser.environment;

import java.util.Objects;

public class Environment {

    public final String bootstrapServer;
    public final String name;
    private final Boolean isModifiable;

    public Environment(String bootstrapServer, String name, Boolean isModifiable) {
        this.bootstrapServer = bootstrapServer;
        this.name = name;
        this.isModifiable = isModifiable;
    }

    public Boolean isModifiable() {
        return isModifiable != null ? isModifiable : false;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Environment that = (Environment) o;
        return Objects.equals(bootstrapServer, that.bootstrapServer) &&
                Objects.equals(name, that.name) &&
                Objects.equals(isModifiable, that.isModifiable);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bootstrapServer, name, isModifiable);
    }
}
