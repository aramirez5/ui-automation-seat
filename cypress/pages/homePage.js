class homePage {
    elements = {
        visitWeb: () => cy.visit('/'),
        acceptCookiesButton: () => cy.get('#onetrust-accept-btn-handler'),
        selectCar: () => cy.get(':nth-child(1) > seat-car-selector-list-item')
    }

    visitSeatCarConfiguratorWeb() {
        this.elements.visitWeb()
    }
}

module.exports = new homePage();