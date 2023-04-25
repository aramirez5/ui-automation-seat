class summaryPage {
    elements = {
        referenceIdLocator: () => cy.get('.configuration-key'),
        downloadUrlLocator: () => cy.get('.more > .ng-star-inserted')
    }
}

module.exports = new summaryPage();