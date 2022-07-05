/// <reference types="cypress" />

import AlertPage from "../../support/pageObject/alertPage";

describe("E2E - alert handling by PageObject", () => {
    beforeEach('', () => {
        cy.visit('https://testowanie-oprogramowania.pl/lekcje/alerty/');
    })

    it('alert', () => {
        AlertPage.clickOnAlertBtn();
        AlertPage.verifyAlertText("Przykładowa treść alertu")
    })
    
    it('alert confirm', () => {
        AlertPage.clickOnAlertConfirmBtn();
        AlertPage.verifyAlertConfirmText("Zaakceptuj aby kontynuować!");
        AlertPage.acceptAlertConfirm()
    })
});
