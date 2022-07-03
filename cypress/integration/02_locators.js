/// <reference types="cypress" />

describe("E2E - Locators", () => {
    it('finding locators method', () => {
        cy.visit('/');

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
})