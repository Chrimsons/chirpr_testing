import {When} from "@badeball/cypress-cucumber-preprocessor";
import Api_testing_PO from "../page_objects/api_testing_PO";

const api = new Api_testing_PO()
When('logging into my account using an API request', () => {
    api.request.loginRequest()

})

When('Viewing all users', () => {
    api.request.getAllUsersRequest()

})