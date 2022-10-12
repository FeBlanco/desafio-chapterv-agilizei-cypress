/// <reference types="cypress"/>

import userPage from '../support/pages/user'
import homePage from '../support/pages/home'

describe('User Page', () => {
  beforeEach(() => {
    cy.login()
    userPage.go()
  })
  it('Acessar a pagina do usuario e visualizar os artigos criados', () => {
    userPage.accessForm()
    userPage.shouldMyArticle()
    homePage.checkArticlePreview()
    homePage.checkArticleTitle()
  })

  it('Acessar a pagina do usuario e curti um artigos criado', () => {
    userPage.accessForm()
    userPage.shouldMyArticle()
    homePage.checkArticlePreview()
    userPage.submitLike()
  })

  it('Acessar a pagina do usuario e curti um artigos favoritado', () => {
    userPage.accessForm()
    userPage.shouldFavoriteArticle()
    homePage.checkArticlePreview()
    homePage.checkArticleTitle()
  })
})
