package kafka.browser.admin.service;

public class ActionNotAllowed extends RuntimeException {
    public ActionNotAllowed(String action) {
        super(String.format("Action \"%s\" is not allowed", action));
    }
}
