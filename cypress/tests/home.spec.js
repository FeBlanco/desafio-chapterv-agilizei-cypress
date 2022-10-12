/// <reference types="cypress"/>
import homePage from '../support/pages/home'

const Chance = require('chance')
const chance = new Chance()

describe('Home', () => {
  beforeEach(() => {
    // Arrange
    cy.login()
    cy.visit('/')
  })
  it('Na home, consigo visualizar os ultimos artigos publicados e acessar', () => {
    homePage.articleMessage('No articles are here... yet.')
    homePage.shouldGlobalArticle()
    homePage.checkArticlePreview()
    homePage.checkArticleTitle()
  })

  it('Buscar artigo pelas principais tags que aparece', () => {
    homePage.articleMessage('No articles are here... yet.')
    homePage.shouldTagsArticle()
    homePage.checkArticlePreview()
    homePage.checkArticleTitle()
  })

  it('Acessar um artigo na home e comentar', () => {
    const comment = chance.sentence()
    homePage.articleMessage('No articles are here... yet.')
    homePage.shouldGlobalArticle()
    homePage.checkArticlePreview()
    homePage.checkArticleTitle()
    homePage.commentArticle(comment)
    homePage.shouldBeComment()
  })
})
