import homePage from '../pages/homePage'
import itemsPage from '../pages/itemsPage'
import optionalsPage from '../pages/optionalsPage'
import summaryPage from '../pages/summaryPage'

describe('UI Automation', () => {
  it('Visit SEAT Car Configurator and verify that the configuration is available to download with X reference id and have the same result', () => {
    // Visit the SEAT Car Configurator web
    homePage.visitSeatCarConfiguratorWeb()
    // Accept cookies message
    homePage.elements.acceptCookiesButton().click()
    // Select a car
    homePage.elements.selectCar().click()
    // Click configure button
    itemsPage.elements.configureButton().click()
    // Click next button (engine select)
    optionalsPage.elements.nextButton().click()
    // Click next button (color select)
    optionalsPage.elements.nextButton().click()
    // Click next button (upholstery select)
    optionalsPage.elements.nextButton().click()
    // Click next button (package select)
    optionalsPage.elements.nextButton().click()
    // Check de reference id
    summaryPage.elements.referenceIdLocator().contains('SPQOXHH4')
    // Check the download link is visible
    summaryPage.elements.downloadUrlLocator().contains('descarga tu configuración aquí').should('be.visible')
  })
})