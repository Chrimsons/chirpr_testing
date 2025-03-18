import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import my_first_chirp_PO from "../page_objects/my_first_chirp_PO";
import Commenting_on_a_chirp_PO from "../page_objects/commenting_on_a_chirp_PO";

const generalChirp = new my_first_chirp_PO()
const replyChirp = new Commenting_on_a_chirp_PO()

Given('I logged into my Chirpr account', () => {
    cy.visit('')
    generalChirp.loginToChirpr()
    generalChirp.assertLogin()
})

When('I will post {string} on the {word} {word} post', (message, selector, username) => {
    replyChirp.postNewReply(selector, username, message)
})

Then('The message {string} will appear inside {word} post as a comment', (message, username) => {
    replyChirp.assertNewReply(message, username)
})