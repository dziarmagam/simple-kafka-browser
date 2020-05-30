package kafka.browser.http;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

import kafka.browser.admin.service.ActionNotAllowed;

@ControllerAdvice
public class ExceptionHandler {

    @org.springframework.web.bind.annotation.ExceptionHandler
    ResponseEntity<String> handleActionNotAllowedException(ActionNotAllowed e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
