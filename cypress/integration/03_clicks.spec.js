/// <reference types="cypress" />

describe("E2E - clicks handling", ()=> {
    beforeEach('',()=>{
        cy.visit('/');
    })

    it('clicks on elemet', () => {
        cy.get('#contact-link > a').click();
        cy.get('[title="Return to Home"]').click()
    });
})