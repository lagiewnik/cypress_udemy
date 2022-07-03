/// <reference types="cypress" />

describe("E2E - typing handling", ()=> {
    beforeEach('',()=>{
        cy.visit('/');
    })

    it('typing values into the input', () => {
       cy.get('#search_query_top').type("hut {enter}", {delay: 100})
    });

    it('Clearing input ', () => {
        cy.get('#search_query_top').type("dress", {delay: 100}).clear();      
    });

})