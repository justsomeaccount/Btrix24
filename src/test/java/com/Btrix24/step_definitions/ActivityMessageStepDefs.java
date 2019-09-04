package com.Btrix24.step_definitions;

import com.Btrix24.utilities.Driver;
import com.Btrix24.utilities.Pages;
import cucumber.api.java.en.*;
import org.junit.Assert;

public class ActivityMessageStepDefs {
Pages pages=new Pages();
String message;
    @When("user sends message {string}")
    public void user_sends_message(String message) {
        this.message=message;
        pages.tasksPage().messageOnActivityStream.click();
        Driver.getDriver().switchTo().frame(pages.tasksPage().messageIframe);
        pages.tasksPage().messageBodyOnActivityStream.sendKeys(message);
        Driver.getDriver().switchTo().parentFrame();

        pages.tasksPage().messageSaveOnActivityStream.click();



    }

    @Then("user can verify new message on stream")
    public void user_can_verify_new_message_on_stream() {
        String actual=pages.tasksPage().firstMessageOnActivityStream.getText();
        Assert.assertEquals(message,actual);

    }



}
