package com.matheusrayol.tests;


import com.matheusrayol.GlobalParameters;
import com.matheusrayol.bases.TestBase;
import com.matheusrayol.flows.HomeFlows;
import com.matheusrayol.pages.HomePage;
import com.matheusrayol.utils.DriverUtils;
import org.junit.Assert;
import org.junit.Test;

public class HomePageTests extends TestBase {

    HomePage homePage;
    HomeFlows homeFlows;
    String url = GlobalParameters.DEFAULT_URL;

    @Test
    public void websiteIsLoaded() {

        homePage = new HomePage();
        homeFlows = new HomeFlows();

        Assert.assertTrue(DriverUtils.INSTANCE.getCurrentUrl().contains(url));
    }
}