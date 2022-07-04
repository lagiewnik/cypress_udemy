/// <reference types="cypress" />

describe("E2E - assertions", ()=> {
    beforeEach('',()=>{
        cy.visit('/');
    })

    it('assertion expect and should', () => {
        
        //Text verification should
        cy.get('a[title="Contact Us"]').should("contain", "Contact us");

        //Text verification execpt
        cy.get('a[title="Contact Us"]').then(link => {
            expect(link).to.contain("Contact us");
        })

        //Negaive text verification
        cy.get('a[title="Contact Us"]').should("not.contain", "facebook");
        //Negative Text verification execpt
        cy.get('a[title="Contact Us"]').then(link => {
            expect(link).not.to.contain("Contact us FB");
        })

        //Verify if class contain
        cy.get("#search_query_top").should("have.class", "form-control")
        cy.get("#search_query_top").then(search => {
            expect(search).to.have.class("form-control")
        })

        //verify if is visible
        cy.get("#search_query_top").should("be.visible")
        cy.get("#search_query_top").then(search => {
            expect(search).be.visible
        })

        //verify count of element
        cy.get("ul.sf-menu").find("li").should("have.length", 14)
        cy.get("ul.sf-menu").find("li").then(eli =>{
            expect(eli).to.have.length(14)
        })

        //verify CSS property
        cy.get("#search_query_top").should("have.css","line-height","45px")
        cy.get("#search_query_top").then(search => {
            expect(search).to.have.css('line-height',"45px")
        })

    });

})