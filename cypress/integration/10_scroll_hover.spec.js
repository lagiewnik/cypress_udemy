/// <reference types="cypress" />

describe("E2E - scroll, hover handling", ()=> {
    beforeEach('',()=>{
        cy.visit('/');
    })

    it('hover', () => {
        cy.get('a[title="Dresses"]').eq(1).trigger("focus")
        cy.get('li.sfHover a[title="Summer Dresses"]').click();

        //scroll to special box
        cy.get("#special_block_right").scrollIntoView()
    });

})