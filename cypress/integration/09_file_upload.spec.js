/// <reference types="cypress" />

describe("E2E - file upload handling", () => {
    beforeEach('', () => {
        cy.visit('/');
    })

    it('alert', () => {
        cy.visit('/index.php?controller=contact');
        cy.get('#fileUpload').attachFile("../fixtures/myszojelen.jpg");
        //sprawdzenie czy plik sie wgral
        cy.get("span.filename").should("contain", "myszojelen.jpg")
    })
    
   
});
