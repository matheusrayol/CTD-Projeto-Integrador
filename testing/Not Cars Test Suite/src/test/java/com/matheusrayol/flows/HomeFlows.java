package com.matheusrayol.flows;

import com.matheusrayol.pages.HomePage;

public class HomeFlows {

    HomePage homePage;

    public HomeFlows() {
        homePage = new HomePage();
    }

    public void startLogin() {
        homePage.goToLogin();
    }

    public void startRegister() {
        homePage.goToRegister();
    }

    public void selectCity(String city) {
        homePage.selectCity(city);
    }

    public void selectDateRange(String dateRange) {
        homePage.selectDate(dateRange);
    }


}
