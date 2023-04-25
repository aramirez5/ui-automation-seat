class itemsPage {
    elements = {
        configureButton: () => cy.get(':nth-child(2) > .second-column > .seat-button-text > main')
    }
}

module.exports = new itemsPage();