package com.Btrix24.step_definitions;

import com.Btrix24.utilities.BrowserUtils;
import com.Btrix24.utilities.Driver;
import com.Btrix24.utilities.ExcelUtil;
import com.Btrix24.utilities.Pages;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Random;

public class TasksStepDefinition {

    private Pages pages = new Pages();
    private int num;

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

    @And("user adds file")
    public void userAddsFile() {
    pages.tasksPage().uploadFile.click();

    num=new Random().nextInt(100);
        try {
            File file = new File(System.getProperty("user.home")+"/Downloads/newfile"+num+".txt");
            /*If file gets created then the createNewFile()
             * method would return true or if the file is
             * already present it would return false
             */
            boolean fvar = file.createNewFile();
            if (fvar){
                System.out.println("File has been created successfully");
            }
            else{
                System.out.println("File already present at the specified location");
            }
        } catch (IOException e) {
            System.out.println("Exception Occurred:");
            e.printStackTrace();
        }

    pages.tasksPage().uploadFilesAndImages.sendKeys(System.getProperty("user.home")+"/Downloads/newfile"+num+".txt");



    }

    @Then("user verify file added to task")
    public void userVerifyFileAddedToTask() {
        Assert.assertEquals("newfile"+num+".txt",pages.tasksPage().uploadedFile.getText());
        System.out.println();
    }

    @Then("user should be able to see taskpage")
    public void userShouldBeAbleToSeeTaskpage() {

        Assert.assertEquals("Portal",Driver.getDriver().getTitle());
        System.out.println();

    }

    @When("user logs into application with {string}")
    public void userLogsIntoApplicationWith(String userType) {
        String filePath=System.getProperty("user.home")+"/IdeaProjects/Btrix24/src/test/resources/externalFiles/Users.xlsx";
        ExcelUtil excelUtil=new ExcelUtil(filePath,"Credentials");
        List<Map<String,String>> dataList=excelUtil.getDataList();

        for (Map<String,String >rowMap:dataList){
            if(userType.equalsIgnoreCase(rowMap.get("User"))) {
                String username=rowMap.get("Username");
                String password=rowMap.get("Password");
                pages.loginPage().login(username,password);

            }
        }


    }

    @And("user should be able to log off")
    public void userShouldBeAbleToLogOff() {
        pages.tasksPage().logOut();
       // BrowserUtils.waitFor(2);



    }

    @Then("user should be on the landing page")
    public void userShouldBeOnTheLandingPage() {
        Assert.assertEquals("Authorization",Driver.getDriver().getTitle());

    }
}
