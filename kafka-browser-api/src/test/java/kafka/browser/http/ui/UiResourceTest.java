package kafka.browser.http.ui;

import org.apache.catalina.ssi.ByteArrayServletOutputStream;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kafka.browser.config.Config;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class UiResourceTest {

    private UiResource uiResource = new UiResource(new Config("environmentFilePath", "clientId", 0, 9000));
    private HttpServletRequest httpServletRequest = Mockito.mock(HttpServletRequest.class);
    private HttpServletResponse httpServletResponse = Mockito.mock(HttpServletResponse.class);
    private ByteArrayServletOutputStream outputStream = new ByteArrayServletOutputStream();

    @BeforeEach
    void init() throws IOException {
        when(httpServletResponse.getOutputStream()).thenReturn(outputStream);
    }


    @Test
    void shouldReturnJsWhenRequestingJsFile() throws IOException {
        //given
        when(httpServletRequest.getRequestURI()).thenReturn("/script.js");
        //when
        uiResource.getResource(httpServletRequest, httpServletResponse);
        //then
        verify(httpServletResponse, times(1)).setContentType("application/javascript; charset=UTF-8");
        verify(httpServletResponse, times(1)).addHeader("Cache-Control", "max-age=3600");
        verify(httpServletResponse, times(1)).flushBuffer();
        assertThat(new String(outputStream.toByteArray())).hasToString("script");

    }

    @Test
    void shouldReturnStyleWhenRequestingStyleFile() throws IOException {
        //given
        when(httpServletRequest.getRequestURI()).thenReturn("/style.css");
        //when
        uiResource.getResource(httpServletRequest, httpServletResponse);
        //then
        verify(httpServletResponse, times(1)).setContentType("text/css; charset=utf-8");
        verify(httpServletResponse, times(1)).addHeader("Cache-Control", "max-age=3600");
        verify(httpServletResponse, times(1)).flushBuffer();
        assertThat(new String(outputStream.toByteArray())).hasToString("style");
    }

    @Test
    void shouldReturnIconWhenRequestingIconFile() throws IOException {
        //given
        when(httpServletRequest.getRequestURI()).thenReturn("/icon.ico");
        //when
        uiResource.getResource(httpServletRequest, httpServletResponse);
        //then
        verify(httpServletResponse, times(1)).setContentType("image/jpeg");
        verify(httpServletResponse, times(1)).addHeader("Cache-Control", "max-age=3600");
        verify(httpServletResponse, times(1)).flushBuffer();
        assertThat(new String(outputStream.toByteArray())).hasToString("icon");
    }

    @Test
    void shouldReturnJsMapWhenRequestingJsMapFile() throws IOException {
        //given
        when(httpServletRequest.getRequestURI()).thenReturn("/script-map.js.map");
        //when
        uiResource.getResource(httpServletRequest, httpServletResponse);
        //then
        verify(httpServletResponse, times(1)).setContentType("application/javascript; charset=UTF-8");
        verify(httpServletResponse, times(1)).addHeader("Cache-Control", "max-age=3600");
        verify(httpServletResponse, times(1)).flushBuffer();
        assertThat(new String(outputStream.toByteArray())).hasToString("map");
    }

    @Test
    void shouldReturnIndexWhenRequestingNonResource() throws IOException {
        //given
        when(httpServletRequest.getRequestURI()).thenReturn("/noResource");
        //when
        uiResource.getResource(httpServletRequest, httpServletResponse);
        //then
        verify(httpServletResponse, times(1)).setContentType("text/html; charset=UTF-8");
        verify(httpServletResponse, times(1)).addHeader("Cache-Control", "max-age=3600");
        verify(httpServletResponse, times(1)).flushBuffer();
        assertThat(new String(outputStream.toByteArray())).hasToString("index");
    }

    @Test
    void shouldReplaceLocalhostInResource() throws IOException {
        //given
        when(httpServletRequest.getRequestURI()).thenReturn("/script-with-host.js");
        when(httpServletRequest.getHeader("host")).thenReturn("address:9000");
        //when
        uiResource.getResource(httpServletRequest, httpServletResponse);
        //then
        verify(httpServletResponse, times(1)).setContentType("application/javascript; charset=UTF-8");
        verify(httpServletResponse, times(1)).addHeader("Cache-Control", "max-age=3600");
        verify(httpServletResponse, times(1)).flushBuffer();
        assertThat(new String(outputStream.toByteArray())).hasToString("some text address:9000 some text");
    }

}