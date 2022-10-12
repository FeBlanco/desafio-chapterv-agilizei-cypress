import { el } from './elements'
import alert from '../../components/alert'

class LoginPage {
  constructor () {
    this.alert = alert
  }

  go () {
    cy.visit('login')
  }

  form (user) {
    if (user.email) cy.get(el.email).clear().type(user.email)
    if (user.password) cy.get(el.password).clear().type(user.password)
  }

  submit () {
    cy.get(el.signInButton).click()
  }

  articleMessage (expectedMessage) {
    cy.contains(expectedMessage).should('be.visible')
  }
}

export default new LoginPage()
