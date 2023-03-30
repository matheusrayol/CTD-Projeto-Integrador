package com.matheusrayol.bases;

import com.matheusrayol.GlobalParameters;
import com.matheusrayol.utils.DriverUtils;
import com.matheusrayol.utils.Utils;
import org.junit.*;
import org.junit.rules.TestName;

public class TestBase {

    @Rule
    public TestName testName = new TestName();

    @BeforeClass
    public static void beforeSuite() {
        new GlobalParameters();
    }

    @Before
    public void beforeTest() {
        DriverUtils.createInstance();
        DriverUtils.INSTANCE.manage().window().maximize();
        DriverUtils.INSTANCE.navigate().to(GlobalParameters.DEFAULT_URL);
    }

    @After
    public void afterTest() {
        Utils.takeScreenShot(testName);
        DriverUtils.quitInstance();
    }

    @AfterClass
    public static void afterSuite() {

    }
}
