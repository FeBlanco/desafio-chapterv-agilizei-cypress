import alert from '../../components/alert'
const el = require('./elements').ELEMENTS

class ArticlePage {
  constructor () {
    this.alert = alert
  }

  go () {
    cy.visit('/')
  }

  accessForm () {
    cy.get(el.linkNovoArtigo).click()
  }

  form (date) {
    if (date.title) cy.get(el.inputTitle).type(date.title)
    if (date.description) cy.get(el.inputDescription).type(date.description)
    if (date.body) cy.get(el.inputBody).type(date.body)
    if (date.tags) cy.get(el.inputTags).type(date.tags)
  }

  submit () {
    cy.contains('button', 'Publish Article').click()
  }

  editArticle () {
    cy.contains('Edit Article').should('be.visible').click({ force: true })
  }

  deleteArticle () {
    cy.contains('Delete Article').should('be.visible').click({ force: true })
  }

  checkArticleCreated (expectedMessage) {
    cy.contains(expectedMessage).should('be.visible')
    cy.get('h1').should('have.text', expectedMessage)
  }
}

export default new ArticlePage()
