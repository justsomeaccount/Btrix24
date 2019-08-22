package com.Btrix24.pages.login_navigation;

import com.Btrix24.utulities.ConfigurationReader;
import com.Btrix24.utulities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.getDriver(), this);}


        @FindBy(css="[name='USER_LOGIN']")
        public WebElement userNameElement;

        @FindBy(css="[name='USER_PASSWORD']")
        public WebElement passwordElement;

        @FindBy(css="[type=submit']")
        public WebElement loginElement;


        public void login(String username, String password){
        userNameElement.sendKeys(username);
        passwordElement.sendKeys(password);
        loginElement.click();
//        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 5);
//        wait.until(ExpectedConditions.titleIs("Dashboard"));
    }

    public void login(){
        String username = ConfigurationReader.getProperty("helpdeskusername1");
        String password = ConfigurationReader.getProperty("helpdeskpassword");
        userNameElement.sendKeys(username);
        passwordElement.sendKeys(password);
        loginElement.click();
    }

    public void login(String role){
        String username ="";
        String password ="";
        if(role.equalsIgnoreCase("helpdesk")) {
            username = ConfigurationReader.getProperty("helpdeskusername1");
            password = ConfigurationReader.getProperty("helpdeskpassword");
        }else if (role.equalsIgnoreCase("marketing"))  {
            username = ConfigurationReader.getProperty("marketingusername1");
            password = ConfigurationReader.getProperty("marketingpassword");
        }else if (role.equalsIgnoreCase("hr")){
            username = ConfigurationReader.getProperty("hrusername1");
            password = ConfigurationReader.getProperty("hrpassword");
        }
        userNameElement.sendKeys(username);
        passwordElement.sendKeys(password);
        loginElement.click();
    }
    public void goToLandingPage() {
        Driver.getDriver().get(ConfigurationReader.getProperty
                ("url" + ConfigurationReader.getProperty("url")));
    }

}
