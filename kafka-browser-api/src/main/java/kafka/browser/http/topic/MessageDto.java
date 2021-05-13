package kafka.browser.http.topic;

import java.util.Base64;

public class MessageDto {
    private String value;
    private String key;

    public MessageDto(String value, String key) {
        this.value = value;
        this.key = key;
    }

    public MessageDto() {
    }

    public String decodeContent(){
        return new String(Base64.getDecoder().decode(value));
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }
}
