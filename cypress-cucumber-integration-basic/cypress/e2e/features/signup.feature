Feature: User signUp

Scenario 01 : Successful signUp

    Given user opens the signup page
    When user enters the username
    And user enters the password
    And user confirms the password
    And user clicks on the signup button
    Then user should receive a success message "Account created successfully!"