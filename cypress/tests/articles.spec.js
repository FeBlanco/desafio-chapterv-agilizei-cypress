/// <reference types="cypress"/>

import articlePage from '../support/pages/articles'
import homePage from '../support/pages/home'

const Chance = require('chance')
const chance = new Chance()

describe('Articles', () => {
  beforeEach(() => {
    cy.login()
    articlePage.go()
  })

  it('Cadastro de novo artigo com sucesso', () => {
    const date = {
      title: 'Artigo de testes' + new Date().getTime(),
      description: chance.sentence(),
      body: chance.paragraph(),
      tags: chance.word()
    }
    articlePage.accessForm()
    articlePage.form(date)
    articlePage.submit()
    articlePage.checkArticleCreated(date.title)
  })

  it('não deve criar um novo artigo sem title', () => {
    const date = {
      description: chance.sentence(),
      body: chance.paragraph(),
      tags: chance.word()
    }
    articlePage.accessForm()
    articlePage.form(date)
    articlePage.submit()
    articlePage.alert.alertMessageShouldBe("title can't be blank")
  })

  it('não deve criar um novo artigo sem descrição', () => {
    const date = {
      title: 'Artigo de testes' + new Date().getTime(),
      body: chance.paragraph(),
      tags: chance.word()
    }
    articlePage.accessForm()
    articlePage.form(date)
    articlePage.submit()
    articlePage.alert.alertMessageShouldBe("description can't be blank")
  })

  it('não deve criar um novo artigo sem preencher o body', () => {
    const date = {
      title: 'Artigo de testes' + new Date().getTime(),
      description: chance.sentence(),
      tags: chance.word()
    }
    articlePage.accessForm()
    articlePage.form(date)
    articlePage.submit()
    articlePage.alert.alertMessageShouldBe("body can't be blank")
  })

  it('não deve criar um novo artigo com todos os campos em branco', () => {
    const date = []
    articlePage.accessForm()
    articlePage.form(date)
    articlePage.submit()
    articlePage.alert.alertMessageShouldBe("title can't be blank")
  })

  it('Editar um artigo', () => {
    const date = {
      title: 'Artigo de testes' + new Date().getTime(),
      description: chance.sentence(),
      body: chance.paragraph(),
      tags: chance.word()
    }
    articlePage.accessForm()
    articlePage.form(date)
    articlePage.submit()
    articlePage.checkArticleCreated(date.title)
    articlePage.editArticle()
    articlePage.form(date.description)
    articlePage.submit()
    articlePage.checkArticleCreated(date.title)
  })

  it('Deletar um artigo', () => {
    const date = {
      title: 'Artigo de testes' + new Date().getTime(),
      description: chance.sentence(),
      body: chance.paragraph(),
      tags: chance.word()
    }
    articlePage.accessForm()
    articlePage.form(date)
    articlePage.submit()
    articlePage.checkArticleCreated(date.title)
    articlePage.deleteArticle()
    homePage.articleMessage('No articles are here... yet.')
  })
})
