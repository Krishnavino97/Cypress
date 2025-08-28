
describe ('SignUp & Login flow Demo', () => {

// describe: Groups related tests. 
// Everything inside describes the “Signup & Login” scenario 
// It shows as a suite in Cypress.

const randomUser = {
    firstName : 'Vinoji',
    lastName : 'Sureshkumar',
    // username : 'user${Date.now()}',
    username : 'svinoji7@gmail.com',
    password : 'password123',

    street : '3D, Araliya Pl',
    city : 'Malabe',
    state : 'Colombo',
    zipCode : '40000',
    ssn : '34',
};

// Defines a test-level variable (visible to all tests in this describe).
// username uses Date.now() so every run gets a unique username 
// (prevents “user already exists” errors).


// it is a function provided by test frameworks (not by JavaScript itself).
// It defines an individual test case.

it ('SignUp NewUser', () => {
    cy.visit ('https://parabank.parasoft.com/parabank/register.htm');

    cy.get('input[name="customer.firstName"]').type(randomUser.firstName);
    cy.get('input[name="customer.lastName"]').type(randomUser.lastName);
    cy.get('input[name="customer.username"]').type(randomUser.username);
    cy.get('input[name="customer.password"]').type(randomUser.password);
    cy.get('input[name="repeatedPassword"').type(randomUser.password);

    cy.get('input[name="customer.address.street"').type(randomUser.street);
    cy.get('input[name="customer.address.city"').type(randomUser.city);
    cy.get('input[name="customer.address.state"').type(randomUser.state);
    cy.get('input[name="customer.address.zipCode"').type(randomUser.zipCode)
    cy.get('input[name="customer.ssn"').type(randomUser.ssn);

// cy.get(selector): queries DOM elements using CSS selectors.
// .type(value): types into inputs.
// You’re filling each field of the form using the data from randomUser.

cy.get('input[value="Register"]').click();

// Clicks the Register button to submit the form.

cy.contains('Your account was created successfully').should('be.visible');

// cy.contains(text) finds an element containing the given text.
// .should('be.visible') is an assertion that waits until the element is visible (or fails if not), proving signup worked.

});


it('Login User', () => {
    cy.visit ('https://parabank.parasoft.com/parabank/index.htm');

    cy.get('input[name="username"]').type(randomUser.username);
    cy.get('input[name="password"').type(randomUser.password);

    cy.get('input[value="Log In"').click();

    cy.contains('Welcome').should('be.visible');
}); 

});