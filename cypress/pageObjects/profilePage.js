class profilePage {
    editContactDetails() {
        return cy.get('#edit-contact-details')
    }
    editContactFirstName() {
        return cy.get('#lovfield-first_name')
    }
    editContactLastName() {
        return cy.get('#lovfield-last_name')
    }
    submitContactDetails() {
        return cy.get('#user-details-submit')
    }
    getSavedContact() {
        return cy.get(':nth-child(3) > .css-14cfphp > .css-11jj6cr')
    }
    editChildDetails() {
        return cy.get('#child-0-edit', { timeout: 5000 })
    }
    editChildName() {
        return cy.get('#lovfield-name')
    }
    submitChildDetails() {
        return cy.get('#child-details-submit')
    }
    navBack() {
        return cy.get('#nav-back')
    }
    getSavedChildDetails() {
        return cy.get('.css-1a2u417 > .css-14cfphp > .css-11jj6cr')
    }
    editAddressDetail() {
        return cy.get('#edit-address-0')
    }
    editAddressDetailFirstName() {
        return cy.get('#first_name')
    }
    editAddressDetailLastName() {
        return cy.get('#last_name')
    }
    editAddressDetailLastName() {
        return cy.get('#last_name')
    }
    editAddressDetailCompanyName() {
        return cy.get('#company')
    }
    editAddressDetailLine1() {
        return cy.get('#line1')
    }
    editAddressDetailLine2() {
        return cy.get('#line2')
    }
    editAddressDetailCity() {
        return cy.get('#city')
    }
    selectAddressDetailCountry() {
        return cy.get('#country')
    }
    selectAddressDetailState() {
        return cy.get('#state')
    }
    editAddressDetailZipcode() {
        return cy.get('#zip_code')
    }
    editAddressDetailPhoneNumber() {
        return cy.get('#phone_number')
    }
    submitAddressDetails() {
        return cy.get('#lovevery-address-form-submit')
    }
    getAddressDetailFirstName() {
        return cy.get('.global-address-display > :nth-child(1) > :nth-child(1)')
    }
    getAddressDetailLastName() {
        return cy.get('.global-address-display > :nth-child(1) > :nth-child(2)')
    }
    getAddressDetailCompanyName() {
        return cy.get('.global-address-display > :nth-child(2) > span')
    }
    getAddressDetailLine1() {
        return cy.get('.global-address-display > :nth-child(3) > :nth-child(1)')
    }
    getAddressDetailLine2() {
        return cy.get('.global-address-display > :nth-child(3) > :nth-child(2)')
    }
    getAddressDetailCity() {
        return cy.get('.global-address-display > :nth-child(4) > :nth-child(1)')
    }
    getAddressDetailState() {
        return cy.get('.global-address-display > :nth-child(4) > :nth-child(2)')
    }
    getAddressDetailZipcode() {
        return cy.get('.global-address-display > :nth-child(4) > :nth-child(3)')
    }
    getAddressDetailCountry() {
        return cy.get(':nth-child(5) > span')
    }
}
export default profilePage