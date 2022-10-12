/// <reference types="cypress"/>

import signupPage from '../support/pages/signup'
describe('Sign Up', () => {
  beforeEach(() => {
    signupPage.go()
  })

  it('Cadastro com sucesso', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: ('cadastro-com-sucesso')
    }).as('postUsers')

    const user = {
      name: 'Aldo',
      email: 'belo@mail.com',
      password: 'pwd123'
    }

    signupPage.form(user)
    signupPage.submit()
    signupPage.articleMessage('No articles are here... yet.')
  })

  it('Cadastro com usuário já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 422,
      fixture: ('cadastro-usuario-existente')
    }).as('postUsers')

    const user = {
      name: 'Zoro Sola',
      email: 'zoro@mail.com',
      password: '123456'
    }
    signupPage.form(user)
    signupPage.submit()
    signupPage.alert.alertMessageShouldBe('username has already been taken')
  })

  it('Cadastro com email já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: ('cadastro-email-existente')
    }).as('postUsers')

    const user = {
      name: 'Nami',
      email: 'gatuna@gmail.com',
      password: 'pwd123'
    }
    signupPage.form(user)
    signupPage.submit()
    signupPage.alert.alertMessageShouldBe('email has already been taken')
  })

  it('Nome deve ser obrigatorio', () => {
    const user = {
      email: 'gatuna@gmail.com',
      password: 'pwd123'
    }
    signupPage.form(user)
    signupPage.submit()
    signupPage.alert.alertMessageShouldBe("username can't be blank")
  })

  it('Email deve ser obrigatorio', () => {
    const user = {
      name: 'Robin',
      password: 'pwd123'
    }
    signupPage.form(user)
    signupPage.submit()
    signupPage.alert.alertMessageShouldBe("email can't be blank")
  })

  it('Senha deve ser obrigatoria', () => {
    const user = {
      name: 'Sanji',
      email: 'sanji@gmail.com'

    }
    signupPage.form(user)
    signupPage.submit()
    signupPage.alert.alertMessageShouldBe("password can't be blank")
  })

  it('Todos os campos são obrigatorios', () => {
    const user = []
    signupPage.form(user)
    signupPage.submit()
    signupPage.alert.alertMessageShouldBe("email can't be blank")
  })
})
