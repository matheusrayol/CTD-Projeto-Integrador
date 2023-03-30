package com.matheusrayol.pages;

import com.matheusrayol.bases.PageBase;
import org.openqa.selenium.By;

public class RegisterPage extends PageBase {

    By firstNameField = By.name("name");
    By lastNameField = By.name("surname");
    By emailField = By.name("email");
    By passwordField = By.name("password");
    By confirmPasswordField = By.name("repassword");
    By registerButton = By.cssSelector("#root > div > div > div > section > form > button");

    public void fillFirstName(String firstName) {
        sendKeys(firstNameField, firstName);
    }

    public void fillSurname(String lastName) {
        sendKeys(lastNameField, lastName);
    }

    public void fillEmail(String email) {
        sendKeys(emailField, email);
    }

    public void fillPassword(String password) {
        sendKeys(passwordField, password);
    }

    public void fillConfirmPassword(String confirmPassword) {
        sendKeys(confirmPasswordField, confirmPassword);
    }

    public void clickOnRegisterButton() {
        click(registerButton);
    }
}
