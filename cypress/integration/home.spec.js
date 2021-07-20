/// <rference types="cypress"/>

// npm run cypress:run -- --spec "cypress/integration/home.spec.js"

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
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
      .contains('Cocktail Menu');
  });

  it('Check for cocktail Cards', () => {
    cy.get('[data-cy=cocktail-card]').should('have.length', 100);
  });

  it('Should find Footer', () => {
    cy.get('[data-cy=footer]');
  });
});
