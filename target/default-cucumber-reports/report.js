$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/activity_stream/task.feature");
formatter.feature({
  "name": "As a user I should be able to create a task from activity stream.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tasks"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to create a task",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs into application with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on plus button on left of Tasks button",
  "keyword": "And "
});
formatter.step({
  "name": "user adds task on pop up form",
  "keyword": "Then "
});
formatter.step({
  "name": "user saves the form and task created",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies new task message displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "helpdesk45@cybertekschool.com",
        "UserUser"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to create a task",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tasks"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksStepDefinition.user_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs into application with \"helpdesk45@cybertekschool.com\" and \"UserUser\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userLogsIntoApplicationWithAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plus button on left of Tasks button",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.userClicksOnPlusButtonOnLeftOfTasksButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds task on pop up form",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userAddsTaskOnPopUpForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user saves the form and task created",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.userSavesTheFormAndTaskCreated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies new task message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userVerifiesNewTaskMessageDisplayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Task has been created\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tugbas-MacBook-Pro.local\u0027, ip: \u00272600:6c56:7608:98d:153d:e150:dd9a:996%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /var/folders/bz/4dqr3zvx7_g...}, goog:chromeOptions: {debuggerAddress: localhost:52351}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 47bcf57b74fc20b0e4b44b6dfa4db5e1\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Task has been created\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\n\tat com.Btrix24.step_definitions.TasksStepDefinition.userVerifiesNewTaskMessageDisplayed(TasksStepDefinition.java:90)\n\tat ✽.user verifies new task message displayed(src/test/resources/features/activity_stream/task.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that user can add checklist regarding to new task.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs into application with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on plus button on left of Tasks button",
  "keyword": "Then "
});
formatter.step({
  "name": "user adds task on pop up form",
  "keyword": "And "
});
formatter.step({
  "name": "user adds checklist",
  "keyword": "And "
});
formatter.step({
  "name": "user verify checklist added to task",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "helpdesk45@cybertekschool.com",
        "UserUser"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can add checklist regarding to new task.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tasks"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksStepDefinition.user_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs into application with \"helpdesk45@cybertekschool.com\" and \"UserUser\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userLogsIntoApplicationWithAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plus button on left of Tasks button",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userClicksOnPlusButtonOnLeftOfTasksButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds task on pop up form",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.userAddsTaskOnPopUpForm()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".side-panel-content-container\u003eiframe\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tugbas-MacBook-Pro.local\u0027, ip: \u00272600:6c56:7608:98d:153d:e150:dd9a:996%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /var/folders/bz/4dqr3zvx7_g...}, goog:chromeOptions: {debuggerAddress: localhost:52434}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3a71220209585d24a6b2bf552eda4973\n*** Element info: {Using\u003dcss selector, value\u003d.side-panel-content-container\u003eiframe}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.getWrappedElement(Unknown Source)\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\n\tat com.Btrix24.step_definitions.TasksStepDefinition.userAddsTaskOnPopUpForm(TasksStepDefinition.java:124)\n\tat ✽.user adds task on pop up form(src/test/resources/features/activity_stream/task.feature:22)\n",
  "status": "failed"
});
formatter.step({
  "name": "user adds checklist",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.userAddsChecklist()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify checklist added to task",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userVerifyChecklistAddedToTask()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that user can add file regarding to new task.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs into application with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on plus button on left of Tasks button",
  "keyword": "Then "
});
formatter.step({
  "name": "user adds task on pop up form",
  "keyword": "And "
});
formatter.step({
  "name": "user adds file",
  "keyword": "And "
});
formatter.step({
  "name": "user verify file added to task",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "helpdesk45@cybertekschool.com",
        "UserUser"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that user can add file regarding to new task.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tasks"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksStepDefinition.user_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs into application with \"helpdesk45@cybertekschool.com\" and \"UserUser\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userLogsIntoApplicationWithAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on plus button on left of Tasks button",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userClicksOnPlusButtonOnLeftOfTasksButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds task on pop up form",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.userAddsTaskOnPopUpForm()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".side-panel-content-container\u003eiframe\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tugbas-MacBook-Pro.local\u0027, ip: \u00272600:6c56:7608:98d:153d:e150:dd9a:996%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: /var/folders/bz/4dqr3zvx7_g...}, goog:chromeOptions: {debuggerAddress: localhost:52484}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: dfbf39f3f4bd7e94879daf6a13e1eb08\n*** Element info: {Using\u003dcss selector, value\u003d.side-panel-content-container\u003eiframe}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.getWrappedElement(Unknown Source)\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\n\tat com.Btrix24.step_definitions.TasksStepDefinition.userAddsTaskOnPopUpForm(TasksStepDefinition.java:124)\n\tat ✽.user adds task on pop up form(src/test/resources/features/activity_stream/task.feature:35)\n",
  "status": "failed"
});
formatter.step({
  "name": "user adds file",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.userAddsFile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify file added to task",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userVerifyFileAddedToTask()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
});