import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import my_first_chirp_PO from "../page_objects/my_first_chirp_PO";

const firstChirp = new my_first_chirp_PO()

Given('I have created an account I will need to login', () => {
    cy.visit('')
})

When('I use my username and password to login', () => {
    firstChirp.loginToChirpr()
})

Then('I will be redirected to the main page, with my username displayed', () => {
    firstChirp.assertLogin()
})

When('I will be able to send off my first post {string}', (message) => {
    firstChirp.newPost(message)
})

Then('My {string} should be displayed on the main page', (message) => {
    firstChirp.assertNewMessage(message)
})