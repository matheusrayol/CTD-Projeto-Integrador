package com.matheusrayol.bases;

import com.matheusrayol.GlobalParameters;
import com.matheusrayol.utils.DriverUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class PageBase {

    protected WebDriverWait wait;
    protected WebDriver driver;
    protected JavascriptExecutor javaScriptExecutor;

    public PageBase() {
        wait = new WebDriverWait(DriverUtils.INSTANCE, Duration.ofSeconds(GlobalParameters.DEFAULT_TIMEOUT));
        driver = DriverUtils.INSTANCE;
        javaScriptExecutor = (JavascriptExecutor) driver;
    }

}
