// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Login from '../pageObjects/login'
import HomePage from '../pageObjects/homePage'
const login = new Login()
const homePage = new HomePage()


Cypress.Commands.add("loginByUI", (username, password) => {
  login.email().type(username)
  login.password().type(password)
  login.signInButton().click()
});

Cypress.Commands.add("logoutByUI", () => {
  homePage.myAccountHover().realHover()
  homePage.logout().click({ force: true })
  login.verifyURL()
});

Cypress.Commands.add('loginBySession', (
  username = Cypress.env("username"),
  password = Cypress.env("password")
) => {
  cy.session([username, password], () => {
    cy.visit('/account/login')
    cy.get('#email').type(username)
    cy.get('#password').type(password, { log: false })
    cy.get("#form-submit-button").click();
    cy.get(".css-1xi7hm7", { timeout: 5000 }).should("be.visible").should("contain", "My Account");
    cy.url().then(url => {
      Cypress.env("homepageUrl", url);
    });
  })
})