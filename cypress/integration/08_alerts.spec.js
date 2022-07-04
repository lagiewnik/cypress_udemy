/// <reference types="cypress" />

describe("E2E - alerts handling", () => {
    beforeEach('', () => {
        cy.visit('https://testowanie-oprogramowania.pl/lekcje/alerty/');
    })

    it('alert', () => {
        cy.get('#alert').click();
        cy.on("window:alert", warning => {
            expect(warning).to.equal("Przykładowa treść alertu");
        })
    })
    
    it('alert confirm', () => {
        cy.get('#alert-confirm').click();
        cy.on("window:confirm", txt => {
            expect(txt).to.equal("Zaakceptuj aby kontynuować!");
        });
        cy.on("window:confirm", () => true)
    })
});
