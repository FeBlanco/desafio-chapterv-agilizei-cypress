import { el } from './elements'

class HomePage {
  articleMessage (expectedMessage) {
    cy.contains(expectedMessage).should('be.visible')
  }

  shouldGlobalArticle () {
    cy.contains('Global Feed').should('be.visible').click()
  }

  checkArticlePreview () {
    cy.get(el.article).should('be.visible').click()
  }

  checkArticleTitle () {
    cy.get(el.title).should('be.visible')
  }

  shouldTagsArticle () {
    cy.get('.sidebar').should('be.visible')
    cy.get(el.tags).should('be.visible').click()
  }

  commentArticle (comment) {
    if (comment) cy.get(el.inputComment).type(comment)
    cy.contains('button', 'Post Comment').click({ force: true })
  }

  shouldBeComment () {
    cy.get(el.cardComment).should('be.visible')
  }
}

export default new HomePage()
