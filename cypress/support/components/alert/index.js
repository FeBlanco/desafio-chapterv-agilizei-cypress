import { el } from './elements'

class Alert {
  alertMessageShouldBe (expectedMessage) {
    cy.get(el.error)
      .should('contain', expectedMessage)
      .should('be.visible')
  }
}

export default new Alert()
