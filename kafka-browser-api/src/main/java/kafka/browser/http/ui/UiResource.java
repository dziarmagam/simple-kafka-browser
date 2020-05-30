package kafka.browser.http.ui;


import org.apache.commons.io.IOUtils;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;
import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kafka.browser.config.Config;

@Configuration
@RestController
@CrossOrigin
@RequestMapping("/**")
class UiResource {

    private final Integer port;

    UiResource(Config configuration){
        this.port = configuration.getServerPort();
    }

    @GetMapping
    void getResource(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws IOException {
        String requestURI = httpServletRequest.getRequestURI();
        String host = httpServletRequest.getHeader("host");
        if (requestURI.endsWith(".js") ||
                requestURI.endsWith(".css") ||
                requestURI.endsWith(".js.map") ||
                requestURI.endsWith(".ico")
        ) {
            InputStream inputStream = IOUtils.toInputStream(loadResource(requestURI, host), "UTF-8");
            httpServletResponse.setContentType(getContentType(requestURI));
            IOUtils.copy(inputStream, httpServletResponse.getOutputStream());
        } else {
            httpServletResponse.setContentType("text/html; charset=UTF-8");
            InputStream inputStream = IOUtils.toInputStream(loadResource("/index.html", host), "UTF-8");
            IOUtils.copy(inputStream, httpServletResponse.getOutputStream());
        }
        httpServletResponse.addHeader("Cache-Control", "max-age=3600");
        httpServletResponse.flushBuffer();
    }

    private String getContentType(String requestURI) {
        if (requestURI.endsWith(".js")) {
            return "application/javascript; charset=UTF-8";
        } else if (requestURI.endsWith(".css")) {
            return "text/css; charset=utf-8";
        } else if (requestURI.endsWith(".js.map")) {
            return "application/javascript; charset=UTF-8";
        } else {
            return "image/jpeg";
        }
    }

    private String loadResource(String resourceName, String host) {
        try {
            byte[] resource = this.getClass().getResourceAsStream("/static" + resourceName).readAllBytes();
            return replaceAddress(resource, host);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private String replaceAddress(byte[] resource, String host) throws UnknownHostException {
        if (host == null) {
            InetAddress localHost = InetAddress.getLocalHost();
            String hostAddress = localHost.getHostAddress();
            return new String(resource).replaceAll("localhost:8080", hostAddress + ":" + port);
        } else {
            return new String(resource).replaceAll("localhost:8080", host);
        }
    }


}
