class login {
    email() {
        return cy.get("#email");
    }
    password() {
        return cy.get("#password")
    }
    signInButton() {
        return cy.get("#form-submit-button").contains("Sign In")
    }
    verifyURL() {
        return cy.url().should("contain", "lovevery.com")
    }
}
export default login