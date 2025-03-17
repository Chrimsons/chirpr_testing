class New_registration_PO {
    elements = {
        registerHereLink: () => cy.contains('Register here'),
        firstNameField: () => cy.get('#firstName'),
        lastNameField: () => cy.get('#lastName'),
        emailField: () => cy.get('#email'),
        passwordField: () => cy.get('#password'),
        confirmPasswordField: () => cy.get('#confirmPassword'),
        usernameField: () => cy.get('#username'),
        profilePictureUpload: () => cy.get('#profilePicture'),
        backButton: () => cy.contains('button', 'Back'),
        nextButton: () => cy.contains('button', 'Next'),
        completeRegistrationButton: () => cy.contains('button', 'Complete Registration')
    }

    visitMainPage(){
        cy.visit('')
    }

    personalDetailsForm(firstName, lastName, email, password) {
        this.elements.firstNameField().should("be.visible").type(firstName)
        this.elements.lastNameField().type(lastName)
        this.elements.emailField().type(email)
        this.elements.passwordField().type(password)
        this.elements.confirmPasswordField().type(password)
        this.elements.nextButton().click()
    }

    accountInfoForm(username){
        this.elements.usernameField().should("be.visible").type(username)
        this.elements.profilePictureUpload().selectFile('cypress/fixtures/test.png')
        this.elements.nextButton().click()
        this.elements.completeRegistrationButton().should("be.visible").click()
    }

    assertRedirection(){
        cy.url().should("eq", 'https://www.chirpr.au/login')
    }


}

export default New_registration_PO