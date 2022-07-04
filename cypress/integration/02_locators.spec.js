/// <reference types="cypress" />

describe("E2E - Locators", () => {
    beforeEach('',()=>{
        cy.visit('/');
    })
    
    it('finding locators method', () => {
        cy.get('a');

        //by id
        cy.get("#search_query_top")

        //by class
        cy.get('.form-control')

        //by attribute
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')
        
        //by atrribute + tag
        cy.get('input[placeholder="Search"]')

        //by multiple attribute
        cy.get('[width="383"][height="267"]')

    });

    it('locators contains', () => {
        cy.contains('Shop now');
        cy.contains('[title="Contact Us"]', 'Contact us');

        cy.get("li").parents("#home-page-tabs").find("li").eq(0);
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")

    });
})