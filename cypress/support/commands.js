import 'cypress-file-upload'
import "@cypress-audit/lighthouse/commands";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openTshirtTab', () => { 
    cy.visit("http://automationpractice.com/index.php?id_category=5&controller=category")
 })

 Cypress.Commands.add('searchPhrase', (phrase, delay) => { 
    cy.get('#search_query_top').type(phrase+"{enter}", {delay: delay})
 })

 Cypress.Commands.add('signIn', (login, password) => {
   cy.get("input[placeholder='Email']").type(login);
   cy.get("input[placeholder='Password']").type(password);
   cy.get("[type='submit']").click();
 })
 