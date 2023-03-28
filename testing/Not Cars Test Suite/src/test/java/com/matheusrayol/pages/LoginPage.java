package com.matheusrayol.pages;

import com.matheusrayol.bases.PageBase;
import org.openqa.selenium.By;

public class LoginPage extends PageBase {

    By emailField = By.name("email");
    By passwordField = By.name("password");
    By loginButton = By.cssSelector("#root > div > div > section > form > button");

    public void fillEmail(String email) {
        sendKeys(emailField, email);
    }

    public void fillPassword(String password) {
        sendKeys(passwordField, password);
    }

    public void clickOnLoginButton() {
        click(loginButton);
    }

}