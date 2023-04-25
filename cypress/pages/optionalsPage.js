class optionalsPage {
    elements = {
        nextFirstButton: () => cy.get('[style="transform: translate3d(0px, 0px, 0px); width: 983.2px; height: 80.8px; position: fixed; top: auto; bottom: 0px; left: 0px;"] > seat-price-details-small > :nth-child(2) > seat-button > main'),
        nextButton: () => cy.get('footer > seat-price-details-small > :nth-child(2) > seat-button > main')
    }
}

module.exports = new optionalsPage();