package com.Btrix24.activity_stream;

import com.Btrix24.utulities.BasePage;
import com.Btrix24.utulities.Driver;
import com.Btrix24.utulities.Pages;
import com.google.errorprone.annotations.FormatString;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class TasksPage extends BasePage {



    Pages pages = new Pages();

    public TasksPage(){
        PageFactory.initElements(Driver.getDriver(), this);}

//////////////////Changes/Addition by (MD)/////////////////////////
       @FindBy(css=".menu-item-plus-icon")
       public WebElement newTaskSmallPlusButtonLeftOfTasksButton;

    @FindBy(xpath="//a[@title='Tasks']/span[1]")
    public WebElement tasksButtonLeft;

    @FindBy(css=".side-panel-content-container>iframe")
    public WebElement iframeSrc;

    @FindBy(css=".ui-btn.ui-btn-success")
    public WebElement addTaskButtonIframe;

    @FindBy(xpath="//*[.='Task has been created']")
    public WebElement messageTaskCreated;










////////////I reviewed until here (MD)/////////////////////////////
        @FindBy(xpath = "//a[@id='tasks-buttonAdd']")
        public WebElement newTaskButton;

        @FindBy(xpath = "//div[@class='task-info-panel-title']//input[@placeholder='Things to do']")
        public WebElement thingsToDoElement;

        @FindBy(css = "[title='Quote text']")
        public WebElement QuatotationIcon;

        @FindBy(css=".bx-calendar-top-month")
        public WebElement monthButton;

        @FindBy(css=".bx-calendar-cell")
        public List<WebElement> dayButton;


        @FindBy(xpath="//button[@class=‘ui-btn ui-btn-success’]")
        public WebElement addTaskButton;

        @FindBy(xpath = "//tr[@data-child-loaded='false']")
        public WebElement newTaskDisplayingLocator;

       //to select month
        public void selectMonth(String month){
        Select monthSelection= new Select(monthButton);
        List<WebElement> months= monthSelection.getOptions();

        for(WebElement each:months) {
            if (each.getText().equals(month)) {
                each.click();
                break;
            }
        }
    }


        public void selectDay(String day){
            for(WebElement eachDay:dayButton){
                if(eachDay.getText().equals(day)){
                    eachDay.click();
                    break;
                }
            }


        }
}
