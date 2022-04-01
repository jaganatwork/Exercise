class homePage {
    myAccountHover() {
        return cy.get("#my-account-popover > .my-account-popover-name")
    }
    logout() {
        return cy.get("#my-account-subnav > .lovevery-logout")
    }
    myAccountTitle() {
        return cy.get(".css-1xi7hm7", { timeout: 5000 })
    }
    myProfileInfo() {
        return cy.get('.css-11waffe > :nth-child(6) > a')
    }
    myAccountSettings() {
        return cy.get('.css-11waffe > :nth-child(7) > a')
    }
}
export default homePage