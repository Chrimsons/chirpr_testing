import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import New_registration_PO from "../page_objects/new_registration_PO";

const chirpRegister = new New_registration_PO()

Given('As a new user I will need to go to the main page', () => {
    chirpRegister.visitMainPage()
})

When('I am on the main page, I will need to click on register here link to create a new account', () => {
    chirpRegister.elements.registerHereLink().click()
})

When('I will enter the form with {word} {word} {word} and {word}', (firstName, lastName, email, password) => {
    chirpRegister.personalDetailsForm(firstName, lastName, email, password)
})

When('On the next page, I will use {word} and click on complete registration on the final page', (username) => {
    chirpRegister.accountInfoForm(username)
})

Then('I should be redirected to the login page', () => {
    chirpRegister.assertRedirection()
})