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
<<<<<<< HEAD
      | hr46@cybertekschool.com        | UserUser |
=======
      | hr46@cybertekschool.com        | UserUser |

@wip
  Scenario Outline: All types of users can login with excel file (data driven)
    Given user on the landing page
    When  user logs into application with "<userType>"
    Then user should be able to see taskpage

    Examples:
      | userType  |
      | helpdesk  |
      | marketing |
      | hr        |
>>>>>>> 1116aae5c0b24b01811244f15f4b9bf09567dae0
