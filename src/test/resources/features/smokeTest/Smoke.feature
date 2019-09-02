

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