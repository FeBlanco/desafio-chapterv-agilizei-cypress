import { el } from './elements'

class UserPage {
  go () {
    cy.visit('#/@Felipe')
  }

  accessForm () {
    cy.get(el.linkMyPage).click()
  }

  shouldMyArticle () {
    cy.contains('My Articles').should('be.visible')
  }

  shouldFavoriteArticle () {
    cy.contains('Favorited Articles').should('be.visible').click()
  }

  submitLike () {
    cy.get(el.like).click()
  }
}

export default new UserPage()
