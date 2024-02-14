/// <reference types="cypress" />

import pageLinks from '../constants/pageLinks';

describe('Page Links', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });
  context('When clicked', () => {
    it.only('About Us redirects to About Us page', () => {
      cy.get(pageLinks.aboutUsLink)
        .click();
      cy.url()
        .should('contain', 'about');
    });
    it('Services redirects to Services page', () => {
      cy.get(pageLinks.servicesLink)
        .click();
      cy.url()
        .should('contain', 'services');
    });
    it('Admin Page redirects to Admin Page page', () => {
      cy.get(pageLinks.adminLink)
        .click();
      cy.url()
        .should('contain', 'admin');
    });
  });
});
