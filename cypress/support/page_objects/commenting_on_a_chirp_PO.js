import userData from "../../fixtures/userDetails.json"

class Commenting_on_a_chirp_PO{
    elements = {
        article: () => cy.get('article'),
        findArticleUsername: (username) => this.elements.article().contains('a', username),
        findArticlePostMessage: (message) => this.elements.article().contains('p', message),
        replyBox: (username) => cy.get(`[placeholder="replying to ${username}"]`),
        sendButton: () => cy.contains('button', 'Send')
    }

    postNewReply(selector, username, message){
        switch (selector) {
            case 'username':
                this.elements.findArticleUsername(username).next().click()
                this.sendingAReply(username, message)
                break
            case 'message':
                this.elements.findArticlePostMessage(message).click()
                this.sendingAReply(username, message)
                break
        }
    }

    sendingAReply(username, message) {
        this.elements.replyBox(username).type(message)
        this.elements.sendButton().click()
    }

    assertNewReply(message, username) {
        this.elements.article().find("a", userData.username).eq(1).should("contain.text", `@${userData.username}`)
        .parents().find("p").should("contain.text", `${username} ${message}`)
    }

}

export default Commenting_on_a_chirp_PO