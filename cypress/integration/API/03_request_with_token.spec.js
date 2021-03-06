/// <reference types="cypress" />
const {faker} = require('@faker-js/faker');

describe( "API request with authorization token tests", () => {
    beforeEach(function() {
        //if we want to refer to fixtures in beforeEach, we do not use the arrow function but function
       
        cy.fixture("example").then(data=> {
            this.dataFix = data
        })
    })
 
    it('Authorization login request', function() {
        const authorizationData = {
            "user": {
                "email": "marianoitaliano@wp.pl",
                "password": "mariano"
            }
        }

        const articleData = {
            "article": {
                "tagList": [],
                "title": faker.random.words(),
                "description": faker.random.words(10),
                "body": faker.lorem.paragraph()
            }
        }

        cy.request("POST", "https://api.realworld.io/api/users/login", authorizationData)
            .its("body").then(res =>{
                const authToken = res.user.token;

                cy.request({
                    method: "POST",
                    url: "https://api.realworld.io/api/articles/",
                    body: articleData,
                    headers: {
                        'Authorization': "Token "+authToken
                    }
                }).then(res=> {
                    expect(res.status).to.equal(200)
                })
            }) 
    });
})