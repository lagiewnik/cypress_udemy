/// <reference types="cypress" />

describe( "Shadow DOM testing", () => {
    it("Shoould open home page", () => {

        cy.visit("https://www.htmlelements.com/demos/menu/shadow-dom/index.htm");
        cy.get(".smart-ui-component").shadow().contains("File").click();
        //ewentualnie jesli jest ustawiona zmienna cypressa: includeShadowDom:true to możemy do shadowDOM odwolywac sie normalnymi metodami
        //cy.contains("File").click()
    })
})