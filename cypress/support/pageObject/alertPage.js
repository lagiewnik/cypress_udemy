class AlertPage {
    get alertBtn() {
        return cy.get('#alert')
    }

    get alertConfirmBtn() {
        return cy.get('#alert-confirm')
    }

    clickOnAlertBtn() {
        this.alertBtn.click()
    }

    clickOnAlertConfirmBtn() {
        this.alertConfirmBtn.click()
    }

    verifyAlertText(text) {
        cy.on("window:alert", warning => {
            expect(warning).to.equal(text);
        })
    }

    verifyAlertConfirmText(text) {
        cy.on("window:confirm", txt => {
            expect(txt).to.equal(text);
        });
        
    }

    acceptAlertConfirm() {
        cy.on("window:confirm", () => true)
    }

    rejectAlertConfirm() {
        cy.on("window:confirm", () => false)
    }
}

export default new AlertPage();