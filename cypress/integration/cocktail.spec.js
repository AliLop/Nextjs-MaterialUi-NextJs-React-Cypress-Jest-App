/// <rference types="cypress"/>

context('Cocktail Page', () => {
  beforeEach(() => {
    cy.visit('/cocktail/17005/');
  });

  it('Should find index page and TopBar', () => {
    cy.get('Header');
  });

  it('Find the about button and go to About page', () => {
    cy.get('[data-cy=about-btn]').contains('About').click();
    cy.url().should('include', '/about');
  });

  it('Find the Subtitle and check it', () => {
    cy.get('[data-cy=header]')
      .get('[data-cy=subtitle]')
      .contains('Cocktail A True Amaretto Sour')
      .should('be.visible');
  });

  it('Verify cocktail Info', () => {
    cy.get('[data-cy=instructions]');
    cy.expect('[data-cy=instructions]').to.not.be.empty;
  });

  it('Find the Go back to Main button and go to Home page', () => {
    cy.get('[data-cy=back-btn]')
      .contains('Go back to Main')
      .should('be.visible')
      .click();

    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('Should find Footer', () => {
    cy.get('[data-cy=footer]');
  });
});
