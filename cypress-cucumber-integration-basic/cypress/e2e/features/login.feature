Feature: User login

Scenario 01 : Login 
    Given user opens the login page
    When user enters the username
    And user enters the password
    And user clicks on the login button
    Then user should see the dashboard page