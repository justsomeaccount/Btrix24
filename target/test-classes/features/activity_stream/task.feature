@tasks
Feature: As a user I should be able to create a task from activity stream.

  Scenario Outline: User should be able to create a task

    Given user on the landing page
    Then  user logs into application with "<username>" and "<password>"
#    Then  user navigate to "Tasks"
#    And   user clicks on new task
#    Then  user enters "task"
    Then  user click "ADD TASK"
#    And  user verifies "task" is displayed

    Examples:
    |username|password|
    |helpdesk45@cybertekschool.com|UserUser|
#    |helpdesk46@cybertekschool.com|UserUser|
#    |marketing45@cybertekschool.com|UserUser|
#    |marketing46@cybertekschool.com|UserUser|
#    |hr45@cybertekschool.com       |UserUser|
#    |hr46@cybertekschool.com       |UserUser|