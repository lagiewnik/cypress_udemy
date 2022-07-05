/// <reference types="cypress" />

describe("E2E - custom commands handling", ()=> {
    beforeEach('',()=>{
        cy.visit('/');
    })

    it('Custom Commans example', () => {
        cy.openTshirtTab();
        cy.searchPhrase("batman", 400)
    });
})