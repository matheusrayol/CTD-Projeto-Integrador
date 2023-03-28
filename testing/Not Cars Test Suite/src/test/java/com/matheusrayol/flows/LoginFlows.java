package com.matheusrayol.flows;

import com.matheusrayol.pages.LoginPage;

public class LoginFlows {

    LoginPage loginPage;

    public LoginFlows() {
        loginPage = new LoginPage();
    }

    public void doLogin(String email, String password) {
        loginPage.fillEmail(email);
        loginPage.fillPassword(password);
        loginPage.clickOnLoginButton();
    }

}
