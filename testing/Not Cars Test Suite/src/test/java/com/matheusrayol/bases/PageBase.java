package com.matheusrayol.bases;

import com.matheusrayol.GlobalParameters;
import com.matheusrayol.utils.DriverUtils;
import org.apache.commons.lang3.time.StopWatch;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class PageBase {

    protected WebDriverWait wait;
    protected WebDriver driver;
    protected JavascriptExecutor javaScriptExecutor;

    public PageBase() {
        wait = new WebDriverWait(DriverUtils.INSTANCE, Duration.ofSeconds(GlobalParameters.DEFAULT_TIMEOUT));
        driver = DriverUtils.INSTANCE;
        javaScriptExecutor = (JavascriptExecutor) driver;
    }

    // Custom Actions
    // Método para aguardar o carregamento da página
    private void waitUntilPageReady() {
        StopWatch timeOut = new StopWatch();
        timeOut.start();

        while (timeOut.getTime() <= GlobalParameters.DEFAULT_TIMEOUT) {
            String documentState = javaScriptExecutor.executeScript("return document.readyState").toString();
            if (documentState.equals("complete")) {
                timeOut.stop();
                break;
            }
        }
    }

    // Método para aguardar a presença de um elemento
    protected WebElement waitForElement(By locator) {
        waitUntilPageReady();
        wait.until(ExpectedConditions.presenceOfElementLocated(locator));
        WebElement element = driver.findElement(locator);
        wait.until(ExpectedConditions.elementToBeClickable(element));
        return element;
    }

    // Método para clicar em um elemento
    protected void click(By locator) {
        WebDriverException possibleWebDriverException = null;
        StopWatch timeOut = new StopWatch();
        timeOut.start();

        while (timeOut.getTime() <= GlobalParameters.DEFAULT_TIMEOUT) {
            WebElement element;

            try {
                element = waitForElement(locator);
                element.click();
                timeOut.stop();
                return;
            } catch (StaleElementReferenceException e) {
                continue;
            } catch (WebDriverException e) {
                possibleWebDriverException = e;
                if (e.getMessage().contains("Other element would receive the click")) {
                    continue;
                }
                throw e;
            }
        }

        try {
            throw new Exception(possibleWebDriverException);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Método para escrever em um elemento
    protected void sendKeys(By locator, String text) {
        wait.until(ExpectedConditions.presenceOfElementLocated(locator));
        WebElement element = driver.findElement(locator);
        element.clear();
        element.sendKeys(text);
    }

    // Método para selecionar um combo box pelo texto visível
    protected void comboBoxSelectByVisibleText(By locator, String text) {
        Select comboBox = new Select(waitForElement(locator));
        comboBox.selectByVisibleText(text);
    }

    // Método para obter o texto de um elemento
    protected String getText(By locator) {
        return waitForElement(locator).getText();
    }

    // Método para obter o valor de um elemento
    protected String getValue(By locator) {
        return waitForElement(locator).getAttribute("value");
    }

    // Método para realizar o upload de um arquivo
    protected void uploadFile(By locator, String path) {
        waitForElement(locator).sendKeys(path);
    }

    // Ações padrão
    // Método para recarregar a página
    public void refresh() {
        DriverUtils.INSTANCE.navigate().refresh();
    }

    // Método para navegar para um URL
    public void navigateTo(String url) {
        DriverUtils.INSTANCE.navigate().to(url);
    }

    // Método para abrir uma nova guia
    public void openNewTab() {
        javaScriptExecutor.executeScript("window.open();");
    }

    // Método para fechar uma guia
    public void closeTab() {
        driver.close();
    }

    // Método para obter o título da página
    public String getTitle() {
        return driver.getTitle();
    }

    // Método para obter o URL da página
    public String getUrl() {
        return driver.getCurrentUrl();
    }

}
