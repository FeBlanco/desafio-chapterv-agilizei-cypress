/// <reference types="cypress"/>

import settingPage from '../support/pages/setting'

const Chance = require('chance')
const chance = new Chance()

describe('Settings', () => {
  beforeEach(() => {
    cy.login()
    settingPage.go()
  })
  it('Alterar dados em settings', () => {
    const user = {
      name: 'Felipe Blanco',
      bio: chance.sentence()
    }
    settingPage.form(user)
    settingPage.submit()
    settingPage.checkUpdateBio()
  })

  it('Fazer logout', () => {
    settingPage.logout()
    settingPage.assertInitial()
  })
})
