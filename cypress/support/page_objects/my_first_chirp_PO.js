import myData from "../../fixtures/userDetails.json"
class My_first_chirp_PO{
    login = {
        emailField: () => cy.get('#email'),
        passwordField: () => cy.get('#password'),
        submitButton: () => cy.contains('button', 'Submit')
    }

    newChirpElements = {
        newChirpTextBox: () => cy.get('[placeholder="Go on have a chirp"]'),
        sendButton: () => cy.contains('button', 'Send'),
        pictureUploadButton: () => cy.contains('input', 'Media')
    }

    assertions = {
        accountNameHeading: () => cy.get('h2'),
        usernameHeading: () => cy.contains('p', '.text-sm opacity-60'),
        newArticle: () => cy.get("article").eq(0),
        assertNewestPostUsername: () => this.assertions.newArticle().get('a'),
        assertNewestPostMessage: () => this.assertions.newArticle().get('p')
    }

    loginToChirpr() {
        this.login.emailField().type(myData.email)
        this.login.passwordField().type(myData.password)
        this.login.submitButton().click()
    }

    assertLogin() {
        cy.url().should("eq", 'https://www.chirpr.au/')
        this.assertions.accountNameHeading().should("contain.text", myData.firstName && myData.lastName)
        this.assertions.accountNameHeading().next().should("contain.text", '@' + myData.username)
    }

    newPost(message) {
        this.newChirpElements.newChirpTextBox().type(message)
        this.newChirpElements.sendButton().click()
    }

    assertNewMessage(message) {
        this.assertions.assertNewestPostUsername().should("contain.text", '@' + myData.username)
        this.assertions.assertNewestPostMessage().should("contain.text", message)
    }

}

export default My_first_chirp_PO