package com.matheusrayol.utils;

import com.matheusrayol.GlobalParameters;
import org.apache.commons.io.FileUtils;
import org.junit.rules.TestName;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;


import java.io.File;
import java.io.IOException;

public class Utils {

    // Method: takeScreenShot
    // Description: Takes a screenshot of the current test result
    public static void takeScreenShot(TestName testName) {
        File file = ((TakesScreenshot) DriverUtils.INSTANCE).getScreenshotAs(OutputType.FILE);

        try {
            FileUtils.copyFile(file,
                    new File(GlobalParameters.DEFAULT_SCREENSHOT_PATH + testName.getMethodName() + ".png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
