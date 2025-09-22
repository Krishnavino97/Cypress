import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ("user opens the signup page", () => {
    cy.visit ("https://parabank.parasoft.com/parabank/register.htm");
});

When ("user enters the username {string}", (username) => {
    cy.get('input[name="username"]').type(username);
});

And  ("user enters the password {string}", (password) => {
    cy.get('input[name="password"]').type(password);
})

And ("user clicks on the login button", () => {
    cy.get('input[value="login"').click();
});

Then ("user should see the dashboard page", () => {
    cy.visit ("");
});