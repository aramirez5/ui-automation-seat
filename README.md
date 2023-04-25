<p align="center">
  <img alt="Cypress" src="https://i.imgur.com/mxWKasN.png">

  <img alt="Cypress" src="https://www.volkswagenag.com/presence/news/2019/07/SEAT-from-hardware-to-software_08_HQ.jpg.x_632.y_1000.trans">
</p>



## What is ui-automation-seat ?

<b>ui-automation-seat</b> is a project that served as a technical test
for SEAT:CODE company.

I used the Cypress framework to do the technical test, which consists
to use the SEAT Car Configurator website and verify that the configuration 
is available to download with X reference id and have the same result  

## Building and installation

We need to install NodeJS. I used the version 18.14.2 

https://nodejs.org/en/blog/release/v18.14.2

See [www.nodejs.org](https://nodejs.org/) for more information.

Once Node installed, you must install Cypress. I used the version 12.10.0: 

```sh
# Install Cypress
npm install --save-dev cypress@12.10.0
```

To execute the tests you can open Cypress in UI mode:

```sh
# Start Cypress UI
npx cypress open
```

Or you can run it headless using Chrome:

```sh
# Start Cypress with headless Chrome
npm run tests-chrome
```