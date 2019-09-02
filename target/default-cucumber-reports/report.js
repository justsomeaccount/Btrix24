$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smokeTest/Smoke.feature");
formatter.feature({
  "name": "Smoke Tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to login and logout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs into application with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be able to see taskpage",
  "keyword": "Then "
});
formatter.step({
  "name": "user should be able to log off",
  "keyword": "And "
});
formatter.step({
  "name": "user should be on the landing page",
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
  "name": "User should be able to login and logout",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
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
  "keyword": "When "
});
formatter.match({
  "location": "TasksStepDefinition.userLogsIntoApplicationWithAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see taskpage",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userShouldBeAbleToSeeTaskpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to log off",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.userShouldBeAbleToLogOff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be on the landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.userShouldBeOnTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});