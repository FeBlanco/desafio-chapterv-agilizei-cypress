import { el } from './elements'

class SettingPage {
  go () {
    cy.visit('settings')
  }

  form (user) {
    cy.get(el.name).clear().type(user.name)
    cy.get(el.bio).clear().type(user.bio)
  }

  submit () {
    cy.contains('button', 'Update Settings').click()
  }

  checkUpdateBio () {
    cy.get(el.shouldBio).should('be.visible')
  }

  logout () {
    cy.contains('button', 'Or click here to logout.').click()
  }

  assertInitial () {
    cy.contains('Global Feed').should('be.visible')
  }
}

export default new SettingPage()
