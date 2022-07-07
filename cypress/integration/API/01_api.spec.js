/// <reference types="cypress" />

describe( "API tests", () => {
    beforeEach(function() {
        //if we want to refer to fixtures in beforeEach, we do not use the arrow function but function
        cy.fixture("example").then(data=> {
            this.dataFix = data
        })
    })
    it("Verify tegs", () => {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("tags");
        cy.visit("https://angular.realworld.io/");
        cy.wait("@tags");
        cy.get("@tags").then(res=>{
            //cy.log(res);
            expect(res.response.statusCode).to.equal(200);
            expect(res.response.body.tags).to.contain("welcome")
                .and.to.contain("implementations");
        })
    })

    it("Incorect login XHR", function() {
        //if we want to refer to fixtures in beforeEach, we do not use the arrow function but function
        cy.visit("https://angular.realworld.io/");
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin");
        cy.get("a.nav-link").contains('Sign in').click()
        cy.signIn(this.dataFix.invalidLogin, this.dataFix.invalidPassword);
        cy.wait("@requestLogin");
        cy.get("@requestLogin").then(res=>{
            cy.log(res);
            expect(res.response.statusCode).to.equal(403);
            cy.fixture("example").then(data=> {
                expect(res.response.statusMessage).to.equal(data.responseMessage403);
            })
            expect(res.response.statusMessage).to.equal("Forbidden");
        })
    })

    it('Correct login', function() {
        cy.visit("https://angular.realworld.io/");
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin");
        cy.get("a.nav-link").contains('Sign in').click()
        cy.signIn(this.dataFix.correctLogin, this.dataFix.correctPassword);
        cy.wait("@requestLogin");
        cy.get("@requestLogin").then(res=>{
            cy.log(res);
            expect(res.response.statusCode).to.equal(200);
            cy.fixture("example").then(data=> {
                expect(res.response.statusMessage).to.equal("OK");
            })
        })
        
    });
})