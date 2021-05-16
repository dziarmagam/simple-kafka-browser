package kafka.browser.admin.service;

public class MessageQuery<T> {
    public final T value;
    public final QueryType queryType;

    public MessageQuery(QueryType queryType, T value) {
        this.queryType = queryType;
        this.value = value;
    }

    public enum QueryType {
        Key,
        Message,
        KeyAndMessage
    }

    public static class KeyMessageQueryValue {
        public final String key;
        public final String message;

        public KeyMessageQueryValue(String key, String message) {
            this.key = key;
            this.message = message;
        }
    }
}
