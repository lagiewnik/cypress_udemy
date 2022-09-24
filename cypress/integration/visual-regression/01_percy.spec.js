/// <reference types="cypress" />

describe("Visual regression", ()=>{
    it('site random picture', () => {
        cy.visit("https://picsum.photos/")
        cy.percySnapshot()
        
    });
}
)