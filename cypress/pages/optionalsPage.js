class optionalsPage {
    elements = {
        nextButton: () => cy.get('body > div.container-body > seat-root > seat-configuration-page > div:nth-child(1) > section.right > footer > seat-price-details-small > section:nth-child(2) > seat-button > main')
    }
}

module.exports = new optionalsPage();