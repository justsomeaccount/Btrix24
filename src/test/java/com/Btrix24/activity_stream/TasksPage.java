package com.Btrix24.activity_stream;

import com.Btrix24.utilities.BasePage;
import com.Btrix24.utilities.Driver;
import com.Btrix24.utilities.Pages;
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

    @FindBy(css=".tasks-task-mpf-link")
    public WebElement checklistButtonIframe;

    @FindBy(css=".js-id-checklist-is-form-title.task-checklist-field-add")
    public WebElement checklistThingsToDoTextIframe;

    @FindBy(css=".js-id-checklist-is-open-form.task-dashed-link-inner")
    public WebElement checklistThingsToDoAddIframe;

    @FindBy(css=".js-id-checklist-is-i-title ")
    public WebElement checklistAddedIframe;

    @FindBy(css="#bx-b-uploadfile-task-form-bitrix_tasks_task_default_1")
    public WebElement uploadFile;

    @FindBy(css="input[type='file']")
    public WebElement uploadFilesAndImages;

    @FindBy(css="span[title='Click to insert file']")
    public WebElement uploadedFile;




















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
