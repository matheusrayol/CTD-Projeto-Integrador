package com.matheusrayol.utils;

import com.matheusrayol.GlobalParameters;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class DriverUtils {

    public static WebDriver INSTANCE = null;

    private static final String downloadPath = GlobalParameters.DEFAULT_DOWNLOAD_PATH;

    // Method: createInstance
    // Description: Creates a new instance of the WebDriver
    public static void createInstance() {
        String browser = GlobalParameters.DEFAULT_BROWSER;
        String execution = GlobalParameters.DEFAULT_EXECUTION;

        if (INSTANCE == null) {
            if (execution.equals("local")) {
                if (browser.equals("chrome")) {
                    ChromeOptions chromeOptions = new ChromeOptions();
                    chromeOptions.addArguments("--lang=pt-BR");
                    chromeOptions.addArguments("download.default_directory", downloadPath);
                    chromeOptions.addArguments("--remote-allow-origins=*");
                    INSTANCE = new ChromeDriver(chromeOptions);
                } else if (browser.equals("chromeHeadless")) {
                    ChromeOptions chromeOptions = new ChromeOptions();
                    chromeOptions.addArguments("download.default_directory", downloadPath);
                    chromeOptions.addArguments("--headless");
                    chromeOptions.addArguments("--remote-allow-origins=*");
                    INSTANCE = new ChromeDriver(chromeOptions);
                } else {
                    try {
                        throw new Exception(
                                "O navegador informado não existe ou não é suportado pela automação no momento.");
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    // Method: quitInstance
    // Description: Quits the current instance of the WebDriver
    public static void quitInstance() {
        if (INSTANCE != null) {
            INSTANCE.quit();
            INSTANCE = null;
        }
    }
}
