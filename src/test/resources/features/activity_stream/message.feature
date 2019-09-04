Feature: Message functionality

  @smoke
  Scenario Outline: User should be able send message
    Given user on the landing page
    When user logs into application with "<username>" and "<password>"
    And user sends message "1234567890"
    Then user can verify new message on stream


    Examples:
      | username                      | password |
      | helpdesk45@cybertekschool.com | UserUser |