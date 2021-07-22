/// <rference types="cypress"/>

// npm run cypress:run -- --spec "cypress/integration/home.spec.js"

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should find index page and TopBar', () => {
    cy.get('Header');
  });

  it('Find the Favorites button and go to Favorites page', () => {
    cy.get('[data-cy=favorites-btn]').contains('Favorites').click();
    cy.url().should('include', '/favorites');
  });

  it('Find the About button and go to About page', () => {
    cy.get('[data-cy=about-btn]').contains('About').click();
    cy.url().should('include', '/about');
  });

  it('Find the Contact button and go to Contact page', () => {
    cy.get('[data-cy=contact-btn]').contains('Contact').click();
    cy.url().should('include', '/contact');
  });

  it('Find the Subtitle and check it', () => {
    cy.get('[data-cy=header]')
      .get('[data-cy=subtitle]')
      .contains('Cocktail Menu');
  });

  it('Check for a 100 cocktail Cards', () => {
    cy.get('[data-cy=cocktail-card]').should('have.length', 100).find('img');
  });

  it('Verify first cocktail Card', () => {
    cy.get('[data-cy=cocktail-name]')
      .first()
      .should('have.text', '155 Belmont')
      .click();
    cy.url().should('include', '/cocktail/15346/');
  });

  it('Should find Footer', () => {
    cy.get('[data-cy=footer]');
  });
});
