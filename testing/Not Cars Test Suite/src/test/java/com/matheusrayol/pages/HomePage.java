package com.matheusrayol.pages;

import com.matheusrayol.bases.PageBase;
import org.openqa.selenium.By;

public class HomePage extends PageBase {

    By cityDropdown = By.cssSelector("#root > div > div > div > main > form > div:nth-child(1) > div > input");
    By dateCheckinCheckoutPicker = By.cssSelector("#root > div > div > div > main > form > div:nth-child(2) > div > input");
    By searchButton = By.cssSelector("#root > div > div > div > main > form > button");
    By loginButton = By.cssSelector("#root > div > div > div > header > div > nav > ul > li:nth-child(2) > div > a:nth-child(1)");
    By registerButton = By.cssSelector("#root > div > div > div > header > div > nav > ul > li:nth-child(2) > div > a:nth-child(2)");
    By homePageLink = By.cssSelector("#root > div > div > div > header > div > div.Navbar_logos__HikAE > a");

    public void goToLogin() {
        click(loginButton);
    }

    public void goToRegister() {
        click(registerButton);
    }

    public void goToHomePage() {
        click(homePageLink);
    }

    public void selectCity(String city) {
        comboBoxSelectByVisibleText(cityDropdown, city);
    }

    public void selectDate(String dateInterval) {
        sendKeys(dateCheckinCheckoutPicker, dateInterval);
    }

    public void searchAvailability() {
        click(searchButton);
    }

}
