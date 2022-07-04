/// <reference types="cypress" />

describe("E2E - invoke handling", ()=> {
    beforeEach('',()=>{
        cy.visit('/');
    })

    it('invoke', () => {
        cy.get('[title="Contact Us"]').invoke("text").then(text => {
            cy.log(text)
        })
        
        cy.get('[title="Contact Us"]').invoke("attr", "href").then(link => {
            cy.log(link)
        })
    });

    it('invoke to get typing value from properties', () => {
        cy.get('#search_query_top').type("blue dress").invoke("prop","value").then(value => {
            cy.log(value)
        })
    })
})