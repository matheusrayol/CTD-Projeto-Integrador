package com.matheusrayol.suite;


import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)

@Suite.SuiteClasses({
        HomePageTests.class,
        LoginTests.class,
        RegisterTests.class,
        VehicleDetailsTests.class
})

public class SuiteTest {

}
