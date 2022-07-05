class SelectPage {
    get select() {
        return cy.get('#selectProductSort')
    }

    selectAllOption() {
        this.select.then(dropdown => {
            cy.wrap(dropdown).find("option").each(option =>{
                cy.wrap(dropdown).select(option.text())
            })
        })
    }
}

export default new SelectPage();