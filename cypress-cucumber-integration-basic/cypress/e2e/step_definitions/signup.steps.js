import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ("user opens the signup page", () => {
    cy.visit ("https://parabank.parasoft.com/parabank/register.htm");
});

When ("user enters the username {string}", (username) => {
    cy.get('input[name="username"]').type(username);
});

And ("user enters the password {string}", (password) => {
    cy.get('input[name="password"').type(password);
});

And ("user confirms the password {string}", (password) => {
    cy.get('input[name="password"]').type(password);
});

And ("user clicks on the signup button", () => {
    cy.get('button[type="signup"]').click(); 
    // OR
    // cy.get('input[value="Register"]').click();
}); 

Then ("user should receive a success message {string}", () => {
    cy.contains("User created successfully").should('be.visible');
}); 