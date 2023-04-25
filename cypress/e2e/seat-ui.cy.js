describe('UI Automation', () => {
  it('Visit SEAT Car Configurator and verify that the configuration is available to download with X reference id and have the same result', () => {
    // Visit the SEAT Car Configurator web
    cy.visit('/')
    // Accept cookies message
    cy.get('#onetrust-accept-btn-handler').click()
    // Select SEAT Ibiza
    cy.get(':nth-child(1) > seat-car-selector-list-item').click()
    // Click configure button
    cy.get(':nth-child(2) > .second-column > .seat-button-text > main').click()
    // Click next button (engine select)
    cy.get('[style="transform: translate3d(0px, 0px, 0px); width: 983.2px; height: 80.8px; position: fixed; top: auto; bottom: 0px; left: 0px;"] > seat-price-details-small > :nth-child(2) > seat-button > main').click()
    // Click next button (color select)
    cy.get('footer > seat-price-details-small > :nth-child(2) > seat-button > main').click()
    // Click next button (upholstery select)
    cy.get('footer > seat-price-details-small > :nth-child(2) > seat-button > main').click()
    // Click next button (package select)
    cy.get('footer > seat-price-details-small > :nth-child(2) > seat-button > main').click()
    // Check de reference id
    cy.get('.configuration-key').contains('SJXPHBHE')
    // Check the download link is visible
    cy.get('.more > .ng-star-inserted').contains('descarga tu configuración aquí').should('be.visible')
  })
})