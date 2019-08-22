$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login/login.feature");
formatter.feature({
  "name": "Login Tests",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "All types of users can login with excel file (data driven)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs into application with \"\u003cuserType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be able to see taskpage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType"
      ]
    },
    {
      "cells": [
        "helpdesk"
      ]
    },
    {
      "cells": [
        "marketing"
      ]
    },
    {
      "cells": [
        "hr"
      ]
    }
  ]
});
formatter.scenario({
  "name": "All types of users can login with excel file (data driven)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
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
  "name": "user logs into application with \"helpdesk\"",
  "keyword": "When "
});
formatter.match({
  "location": "TasksStepDefinition.userLogsIntoApplicationWith(String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "All types of users can login with excel file (data driven)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
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
  "name": "user logs into application with \"marketing\"",
  "keyword": "When "
});
formatter.match({
  "location": "TasksStepDefinition.userLogsIntoApplicationWith(String)"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Portal]\u003e but was:\u003c[Authorization]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.Btrix24.step_definitions.TasksStepDefinition.userShouldBeAbleToSeeTaskpage(TasksStepDefinition.java:190)\n\tat ✽.user should be able to see taskpage(src/test/resources/features/login/login.feature:21)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "All types of users can login with excel file (data driven)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
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
  "name": "user logs into application with \"hr\"",
  "keyword": "When "
});
formatter.match({
  "location": "TasksStepDefinition.userLogsIntoApplicationWith(String)"
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
formatter.after({
  "status": "passed"
});
});