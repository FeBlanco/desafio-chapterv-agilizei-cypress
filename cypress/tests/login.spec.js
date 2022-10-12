/// <reference types="cypress"/>
import loginPage from '../support/pages/login'
describe('Sign in', () => {
  beforeEach(() => {
    loginPage.go()
  })

  it('Login com sucesso', () => {
    const user = {
      email: 'felipebg@mail.com',
      password: 'pwd123'
    }
    loginPage.form(user)
    loginPage.submit()
    loginPage.articleMessage('No articles are here... yet.')
  })

  it('nao deve logar com senha invalida', () => {
    const user = {
      email: 'felipebg@email.com',
      password: 'abc123'
    }
    loginPage.form(user)
    loginPage.submit()
    loginPage.alert.alertMessageShouldBe('email or password is invalid')
  })

  it('senha deve ser obrigatória', () => {
    const user = {
      email: 'felipebg@email.com'
    }
    loginPage.form(user)
    loginPage.submit()
    loginPage.alert.alertMessageShouldBe("password can't be blank")
  })

  it('email deve ser obrigatório', () => {
    const user = {
      password: 'pwd123'
    }
    loginPage.form(user)
    loginPage.submit()
    loginPage.alert.alertMessageShouldBe("email can't be blank")
  })
})
