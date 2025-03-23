import userDetails from "../../fixtures/userDetails.json"

class Api_testing_PO {
    request = {
        loginRequest: () => cy.request('POST', 'https://api.chirpr.au/api/v1/User/login', {
            "email": userDetails.email,
            "password": userDetails.password
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.user.username).to.eq(userDetails.username)
        }),
        getAllUsersRequest: () => cy.request('GET', 'https://api.chirpr.au/api/v1/chirp/getAllByUserID/4')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.user.username).to.eq(userDetails.username)
            })
    }
}

export default Api_testing_PO