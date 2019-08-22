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
  "name": "user logs into application with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigate to \"Tasks\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on new task",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"task\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click \"ADD TASK\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user verifies \"task\" is displayed",
  "keyword": "And "
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
    },
    {
      "cells": [
        "helpdesk46@cybertekschool.com",
        "UserUser"
      ]
    },
    {
      "cells": [
        "marketing45@cybertekschool.com",
        "UserUser"
      ]
    },
    {
      "cells": [
        "marketing46@cybertekschool.com",
        "UserUser"
      ]
    },
    {
      "cells": [
        "hr45@cybertekschool.com",
        "UserUser"
      ]
    },
    {
      "cells": [
        "hr46@cybertekschool.com",
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
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.Btrix24.step_definitions.Hook.setup(Hook.java:23)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksStepDefinition.user_on_the_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs into application with helpdesk45@cybertekschool.com and UserUser",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_logs_into_application_with_helpdesk_cybertekschool_com_and_UserUser(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate to \"Tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_navigate_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on new task",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_clicks_on_new_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"task\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click \"ADD TASK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies \"task\" is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_verifies_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
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
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.Btrix24.step_definitions.Hook.setup(Hook.java:23)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksStepDefinition.user_on_the_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs into application with helpdesk46@cybertekschool.com and UserUser",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_logs_into_application_with_helpdesk_cybertekschool_com_and_UserUser(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate to \"Tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_navigate_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on new task",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_clicks_on_new_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"task\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click \"ADD TASK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies \"task\" is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_verifies_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
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
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.Btrix24.step_definitions.Hook.setup(Hook.java:23)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksStepDefinition.user_on_the_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs into application with marketing45@cybertekschool.com and UserUser",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_logs_into_application_with_marketing_cybertekschool_com_and_UserUser(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate to \"Tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_navigate_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on new task",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_clicks_on_new_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"task\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click \"ADD TASK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies \"task\" is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_verifies_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
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
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.Btrix24.step_definitions.Hook.setup(Hook.java:23)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksStepDefinition.user_on_the_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs into application with marketing46@cybertekschool.com and UserUser",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_logs_into_application_with_marketing_cybertekschool_com_and_UserUser(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigate to \"Tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_navigate_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on new task",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_clicks_on_new_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"task\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click \"ADD TASK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies \"task\" is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_verifies_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
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
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.Btrix24.step_definitions.Hook.setup(Hook.java:23)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksStepDefinition.user_on_the_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs into application with hr45@cybertekschool.com and UserUser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user navigate to \"Tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_navigate_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on new task",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_clicks_on_new_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"task\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click \"ADD TASK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies \"task\" is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_verifies_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
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
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.Btrix24.step_definitions.Hook.setup(Hook.java:23)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksStepDefinition.user_on_the_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs into application with hr46@cybertekschool.com and UserUser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user navigate to \"Tasks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_navigate_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on new task",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_clicks_on_new_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"task\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_enters(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click \"ADD TASK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies \"task\" is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_verifies_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify that user can upload a link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tasks"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.Btrix24.step_definitions.Hook.setup(Hook.java:23)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:40)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "user on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksStepDefinition.user_on_the_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs into application with \"helpdesk45@cybertekschool.com\" and \"UserUser\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_logs_into_application_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on plus button on left of Tasks button",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_clicks_on_plus_button_on_left_of_Tasks_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user upload a \"link\"",
  "keyword": "And "
});
formatter.match({
  "location": "TasksStepDefinition.user_upload_a(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify checklist added to task",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.user_verify_checklist_added_to_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
});