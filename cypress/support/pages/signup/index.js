import { el } from './elements'
import alert from '../../components/alert'

class SignUpPage {
  constructor () {
    this.alert = alert
  }

  go () {
    cy.visit('register')
  }

  form (user) {
    if (user.name) cy.get(el.name).clear().type(user.name)
    if (user.email) cy.get(el.email).clear().type(user.email)
    if (user.password) cy.get(el.password).clear().type(user.password)
  }

  submit () {
    cy.get(el.submit).click()
  }

  articleMessage (expectedMessage) {
    cy.contains(expectedMessage).should('be.visible')
  }
}

export default new SignUpPage()
