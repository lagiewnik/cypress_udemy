/// <reference types="cypress" />

describe( "API tests", () => {
    beforeEach(function() {
        //if we want to refer to fixtures in beforeEach, we do not use the arrow function but function
        cy.fixture("example").then(data=> {
            this.dataFix = data
        })
        cy.fixture("tags").then(data=> {
            this.tagsFix = data
        })
    })
    it("Mocking tags response", function() {
        cy.intercept("GET", "https://api.realworld.io/api/tags", {fixture: 'tags.json'}).as("tags");
        cy.visit("https://angular.realworld.io/");
        cy.get("a.nav-link").contains('Sign in').click()
        cy.signIn(this.dataFix.correctLogin, this.dataFix.correctPassword);
        cy.wait("@tags");
        cy.get("@tags").then(res=>{
            cy.log(res.response.body.tags);
            cy.log(this.tagsFix.tags)
            expect(res.response.statusCode).to.equal(200);
            expect(res.response.body.tags).to.deep.equal(this.tagsFix.tags)

        })
    })

})