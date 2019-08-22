package com.Btrix24.utilities;

import com.Btrix24.activity_stream.TasksPage;
import com.Btrix24.pages.login_navigation.LoginPage;

public class Pages {

    private LoginPage loginPage;
    private TasksPage tasksPage;

    public LoginPage loginPage() {
        if (loginPage == null) {
            loginPage = new LoginPage();
        }
        return loginPage;
    }
    public TasksPage tasksPage() {
        if (tasksPage == null) {
            tasksPage = new TasksPage();
        }
        return tasksPage;
    }

}
