/// <reference types="cypress" />

describe("E2E - dropdown handling", () => {
    beforeEach('', () => {
        cy.visit('/');
    })

    it('dropdown', () => {
        cy.visit('/index.php?id_category=3&controller=category');
        
        //By name
        cy.get('#selectProductSort').select("In stock")

        //By value
        cy.get('#selectProductSort').select("price:asc")

        //by index
        cy.get('#selectProductSort').select(7)

    })
    
    it('dropdown - all option choice', () => {
        cy.visit('/index.php?id_category=3&controller=category');
        cy.get('#selectProductSort').then(dropdown => {
            cy.wrap(dropdown).find("option").each(option =>{
                cy.wrap(dropdown).select(option.text())
            })
        })

    })
});
