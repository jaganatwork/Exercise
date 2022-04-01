import HomePage from '../pageObjects/homePage'

describe("Automated UI test suite around the login page.", () => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");

    beforeEach(() => {
        // Block newrelic js outright due to issues with Cypress networking code.
        cy.log("Blocking NewRelic scripts");
        //Will block
        //https://js-agent.newrelic.com/nr-spa-1208.js
        cy.intercept(/\.newrelic.*$/, (req) => {
            console.log("NEW RELIC INTERCEPTED");
            req.reply("console.log('Fake New Relic script loaded');");
        });
        cy.visit("/account/login");
    });
    it("should be able to log in the Test Site and logout", () => {
        const homePage = new HomePage()
        const myAccountTitle = "My Account"
        cy.loginByUI(username, password);
        homePage.myAccountTitle().should("be.visible").should("contain", myAccountTitle);
        cy.logoutByUI()
    });
});