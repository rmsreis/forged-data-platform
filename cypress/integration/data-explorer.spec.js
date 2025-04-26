/// <reference types="cypress" />

describe('Data Explorer', () => {
    beforeEach(() => {
      cy.visit('/data-explorer');
    });
  
    it('should display the data explorer page', () => {
      cy.contains('Materials Data Explorer');
      cy.get('input[placeholder*="Search datasets"]').should('be.visible');
    });
  
    it('should show a list of datasets', () => {
      cy.get('table').should('be.visible');
      cy.contains('High-Temp Superalloy Database').should('be.visible');
      cy.contains('Ti-6Al-4V Process Mapping').should('be.visible');
    });
  
    it('should allow filtering datasets', () => {
      cy.get('input[placeholder*="Search datasets"]').type('superalloy');
      cy.get('button:contains("Search")').click();
      cy.contains('High-Temp Superalloy Database').should('be.visible');
      cy.contains('Ti-6Al-4V Process Mapping').should('not.exist');
    });
  });