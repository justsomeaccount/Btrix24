Feature: Login Tests

  Scenario Outline: All types of users can login
    Given user on the landing page
    When  user logs into application with "<username>" and "<password>"
    Then user should be able to see taskpage

    Examples:
      | username                       | password |
      | helpdesk45@cybertekschool.com  | UserUser |
      | helpdesk46@cybertekschool.com  | UserUser |
      | marketing45@cybertekschool.com | UserUser |
      | marketing46@cybertekschool.com | UserUser |
      | hr45@cybertekschool.com        | UserUser |
      | hr46@cybertekschool.com        | UserUser |