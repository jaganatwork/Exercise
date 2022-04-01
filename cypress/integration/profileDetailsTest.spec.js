import HomePage from '../pageObjects/homePage'
import ProfilePage from "../pageObjects/profilePage"
import testData from "../fixtures/testData.json";

const homePage = new HomePage()
const profilePage = new ProfilePage()


describe("Automated UI test suite around the Profile And Account Settings", () => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    beforeEach(() => {

        // Block newrelic js outright due to issues with Cypress networking code.
        cy.log("Blocking NewRelic scripts");
        //Will block
        //  https://js-agent.newrelic.com/nr-spa-1208.js
        cy.intercept(/\.newrelic.*$/, (req) => {
            console.log("NEW RELIC INTERCEPTED");
            req.reply("console.log('Fake New Relic script loaded');");
        });
        cy.loginBySession()
    });
    it("Change User’s Profile Info,Contact Details,Name(Edit-First&Last)", () => {
        cy.visit(Cypress.env("homepageUrl"))
        homePage.myProfileInfo().should("be.visible").should("contain", "Profile Info").click()
        cy.fixture("testData").then((testDataFixture) => {
            testDataFixture.forEach(data => {
                profilePage.editContactDetails().click()
                profilePage.editContactFirstName().click().clear().type(data.contactFirstName)
                profilePage.editContactLastName().click().clear().type(data.contactLastName)
                profilePage.submitContactDetails().click()
                profilePage.navBack().click()
                profilePage.getSavedContact().should("contain", data.contactFirstName + " " + data.contactLastName)
            })
        });

    });

    it("Change User’s Profile Info,Child Details , Name (Edit-Name)", () => {
        cy.visit(Cypress.env("homepageUrl"))
        homePage.myProfileInfo().should("be.visible").should("contain", "Profile Info").click()
        cy.fixture("testData").then((testDataFixture) => {
            testDataFixture.forEach(data => {
                profilePage.editChildDetails().click()
                profilePage.editChildName().click().clear().type(data.childName)
                profilePage.submitChildDetails().click()
                profilePage.navBack().click()
                profilePage.getSavedChildDetails().should("contain", data.childName)
            })
        });
    });

    it("Change User’s Account Settings,Address Book,(Edit-All Fields)", () => {
        cy.visit(Cypress.env("homepageUrl"))
        homePage.myAccountSettings().should("be.visible").should("contain", "Account Settings").click()
        cy.fixture("testData").then((testDataFixture) => {
            testDataFixture.forEach(data => {
                profilePage.editAddressDetail().click()
                profilePage.editAddressDetailFirstName().click().clear().type(data.firstName)
                profilePage.editAddressDetailLastName().click().clear().type(data.lastName)
                profilePage.editAddressDetailCompanyName().click().clear().type(data.companyName)
                profilePage.editAddressDetailLine1().click().clear().type(data.addressLine1)
                profilePage.editAddressDetailLine2().click().clear().type(data.addressLine2)
                profilePage.editAddressDetailCity().click().clear().type(data.city)
                profilePage.selectAddressDetailCountry().select(data.country)
                profilePage.selectAddressDetailState().select(data.state)
                profilePage.editAddressDetailZipcode().click().clear().type(data.zip)
                profilePage.editAddressDetailPhoneNumber().click().clear().type(data.phone)
                profilePage.submitAddressDetails().click()
                profilePage.navBack().click()
                profilePage.getAddressDetailFirstName().should("contain", data.firstName)
                profilePage.getAddressDetailLastName().should("contain", data.lastName)
                profilePage.getAddressDetailCompanyName().should("contain", data.companyName)
                profilePage.getAddressDetailLine1().should("contain", data.addressLine1)
                profilePage.getAddressDetailLine2().should("contain", data.addressLine2)
                profilePage.getAddressDetailCity().should("contain", data.city)
                profilePage.getAddressDetailState().should("contain", data.state)
                profilePage.getAddressDetailZipcode().should("contain", data.zip)
                profilePage.getAddressDetailCountry().should("contain", data.country)
            })
        });
    });
});