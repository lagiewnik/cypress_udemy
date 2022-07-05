/// <reference types="cypress" />

import SelectPage from "../../support/pageObject/selectPage";

describe("E2E - dropdown handling", () => {
    beforeEach('', () => {
        cy.visit('/');
    })

    it('dropdown', () => {
        cy.visit('/index.php?id_category=3&controller=category');
        
        //By name
        SelectPage.select.select("In stock")

        //By value
        SelectPage.select.select("price:asc")

        //by index
        SelectPage.select.select(7)

    })
    
    it('dropdown - all option choice', () => {
        cy.visit('/index.php?id_category=3&controller=category');
        SelectPage.selectAllOption()

    })
});
