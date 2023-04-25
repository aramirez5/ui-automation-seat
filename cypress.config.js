const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://configurador.seat.es/seat-cc/configurator/LIVE/003/DEFAULT/es/car-selector'
  },
});
