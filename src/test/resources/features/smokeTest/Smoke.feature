

@smoke
Feature: Smoke Tests
  Scenario Outline: User should be able to login and logout
    Given user on the landing page
    When user logs into application with "<username>" and "<password>"
    Then user should be able to see taskpage
    And user should be able to log off
    Then user should be on the landing page

    Examples:
      |username|password|
      |helpdesk45@cybertekschool.com|UserUser|



  Scenario Outline: User should be able to create a task

    Given user on the landing page
    Then  user logs into application with "<username>" and "<password>"
    And user clicks on plus button on left of Tasks button
    Then user adds task on pop up form
    And user saves the form and task created
    Then  user verifies new task message displayed

    Examples:
      |username|password|
      |helpdesk45@cybertekschool.com|UserUser|



  Scenario Outline: User should be able send message
    Given user on the landing page
    When user logs into application with "<username>" and "<password>"
    And user sends message "1234567890"
    Then user can verify new message on stream


    Examples:
      | username                      | password |
      | helpdesk45@cybertekschool.com | UserUser |