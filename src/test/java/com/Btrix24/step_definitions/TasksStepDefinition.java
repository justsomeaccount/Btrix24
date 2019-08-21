package com.Btrix24.step_definitions;

import com.Btrix24.utulities.BrowserUtils;
import com.Btrix24.utulities.Driver;
import com.Btrix24.utulities.Pages;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;

public class TasksStepDefinition {

    Pages pages = new Pages();

    @Given("user on the landing page")
    public void user_on_the_landing_page() {
        pages.loginPage().goToLandingPage();
    }
//
//    @Then("user logs into application with helpdesk{int}@cybertekschool.com and UserUser")
//    public void user_logs_into_application_with_helpdesk_cybertekschool_com_and_UserUser(String username,String password) {
//
//        pages.loginPage().login(username,password);
//    }

    @Then("user navigate to {string}")
    public void user_navigate_to(String module) {
        // Write code here that turns the phrase above into concrete actions
        pages.tasksPage().navigateToModule(module);

    }

    @Then("user clicks on new task")
    public void user_clicks_on_new_task() {
        pages.tasksPage().newTaskButton.click();
    }

    @Then("user enters {string}")
    public void user_enters(String string) {
        pages.tasksPage().thingsToDoElement.sendKeys("schedule a new meeting");

    }

    @Then("user click {string}")
    public void user_click(String string) {
        Actions action=new Actions(Driver.getDriver());
        action.moveToElement(pages.tasksPage().tasksButtonLeft).perform();
        pages.tasksPage().newTaskSmallPlusButtonLeftOfTasksButton.click();
        //BrowserUtils.waitFor(2);
        Driver.getDriver().switchTo().frame(pages.tasksPage().iframeSrc);

        pages.tasksPage().thingsToDoElement.sendKeys("Task-1");
        pages.tasksPage().addTaskButtonIframe.click();
        //Driver.getDriver().switchTo().parentFrame();
        //Assert.assertTrue(pages.tasksPage().messageTaskCreated.isDisplayed());



    }



    @Then("user logs into application with marketing{int}@cybertekschool.com and UserUser")
    public void user_logs_into_application_with_marketing_cybertekschool_com_and_UserUser(Integer int1) {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("user logs into application with hr{int}@cybertekschool.com and UserUser")
    public void user_logs_into_application_with_hr_cybertekschool_com_and_UserUser(Integer int1) {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }


    @Then("user logs into application with {string} and {string}")
    public void userLogsIntoApplicationWithAnd(String username, String password) {
        pages.loginPage().login(username,password);
    }

    @And("user verifies new task message displayed")
    public void userVerifiesNewTaskMessageDisplayed() {
        Driver.getDriver().switchTo().parentFrame();
        Assert.assertTrue(pages.tasksPage().messageTaskCreated.isDisplayed());

    }

    @When("user logs into application as {string}")
    public void userLogsIntoApplicationAs(String role) {
        pages.loginPage().login(role);
    }

    @Then("user add task using plus button on left of Tasks button")
    public void userAddTaskUsingPlusButtonOnLeftOfTasksButton() {
        Actions action=new Actions(Driver.getDriver());
        action.moveToElement(pages.tasksPage().tasksButtonLeft).perform();
        pages.tasksPage().newTaskSmallPlusButtonLeftOfTasksButton.click();
        //BrowserUtils.waitFor(2);
        Driver.getDriver().switchTo().frame(pages.tasksPage().iframeSrc);

        pages.tasksPage().thingsToDoElement.sendKeys("Task-1");
        pages.tasksPage().addTaskButtonIframe.click();
        //Driver.getDriver().switchTo().parentFrame();
        //Assert.assertTrue(pages.tasksPage().messageTaskCreated.isDisplayed());

    }

    @And("user clicks on plus button on left of Tasks button")
    public void userClicksOnPlusButtonOnLeftOfTasksButton() {
        Actions action=new Actions(Driver.getDriver());
        action.moveToElement(pages.tasksPage().tasksButtonLeft).perform();
        pages.tasksPage().newTaskSmallPlusButtonLeftOfTasksButton.click();
        //BrowserUtils.waitFor(2);
    }

    @Then("user adds task on pop up form")
    public void userAddsTaskOnPopUpForm() {
        Driver.getDriver().switchTo().frame(pages.tasksPage().iframeSrc);

        pages.tasksPage().thingsToDoElement.sendKeys("Task-1");
    }

    @And("user saves the form and task created")
    public void userSavesTheFormAndTaskCreated() {
        pages.tasksPage().addTaskButtonIframe.click();

    }

    @Then("user adds checklist")
    public void userAddsChecklist() {
        pages.tasksPage().checklistButtonIframe.click();
        pages.tasksPage().checklistThingsToDoTextIframe.sendKeys("Step-1");
        pages.tasksPage().checklistThingsToDoAddIframe.click();

    }

    @Then("user verify checklist added to task")
    public void userVerifyChecklistAddedToTask() {
        Assert.assertTrue(pages.tasksPage().checklistAddedIframe.isDisplayed());
    }
}
