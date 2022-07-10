/// <reference types="cypress" />

describe( "E2E - Home Page", () => {
    it("Shoould open home page", () => {
        cy.visit(Cypress.env("url"));
    })
})