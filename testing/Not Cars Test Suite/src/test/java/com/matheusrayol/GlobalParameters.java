package com.matheusrayol;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class GlobalParameters {

    public static String DEFAULT_BROWSER;
    public static String DEFAULT_EXECUTION;
    public static int DEFAULT_TIMEOUT;
    public static String DEFAULT_URL;
    public static String DEFAULT_DOWNLOAD_PATH;
    public static String DEFAULT_SCREENSHOT_PATH;
    public static String DEFAULT_USERNAME;
    public static String DEFAULT_PASSWORD;

    private final Properties properties;

    public GlobalParameters() {
        // Load the properties file
        properties = new Properties();
        InputStream input;

        try {
            input = new FileInputStream("globalParameters.properties");
            properties.load(input);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Set the global parameters
        DEFAULT_BROWSER = properties.getProperty("DEFAULT_BROWSER");
        DEFAULT_EXECUTION = properties.getProperty("DEFAULT_EXECUTION");
        DEFAULT_TIMEOUT = Integer.parseInt(properties.getProperty("DEFAULT_TIMEOUT"));
        DEFAULT_URL = properties.getProperty("DEFAULT_URL");
        DEFAULT_DOWNLOAD_PATH = properties.getProperty("DEFAULT_DOWNLOAD_PATH");
        DEFAULT_SCREENSHOT_PATH = properties.getProperty("DEFAULT_SCREENSHOT_PATH");
        DEFAULT_USERNAME = properties.getProperty("DEFAULT_USERNAME");
        DEFAULT_PASSWORD = properties.getProperty("DEFAULT_PASSWORD");
    }
}
