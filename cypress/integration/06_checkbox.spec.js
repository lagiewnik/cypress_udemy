/// <reference types="cypress" />

describe("E2E - checkbox handling", () => {
    beforeEach('', () => {
        cy.visit('/');
    })

    it('checkbox', () => {
        cy.visit('/index.php?id_category=3&controller=category');
        cy.get('#ul_layered_category_0').find("input").then(checkboxes => {
            cy.get(checkboxes).eq(0).check();
            cy.get(checkboxes).eq(1).check({ force: true }).invoke("prop", "checked").then(checked => {
                cy.log(checked);
            });
        })
        //Multiple checked for all finded input
        cy.get("#ul_layered_id_attribute_group_1").find("input").check();
    })
    
});
