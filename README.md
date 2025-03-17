# Chirpr Automation Testing

## PreRequisite

First, install [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [NPX](https://www.npmjs.com/package/npx) and  [BREW](https://brew.sh/)(MacOs Only)

Next, install [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Git](https://github.com/git-for-windows/git/releases/download/v2.49.0.windows.1/Git-2.49.0-64-bit.exe).

## Installation Guide
1. Pull the content into your local machine.
2. In terminal make sure you are in the folder directories.
3. In terminal type in ***npm install*** to install the required dependencies.
>This should install the following:
>>- Cypress: A web testing and automation framework.
>>- Badeball/Bahmutov: Cucumber/Gherkin Behaviour Driven Development Framework.

4. *(optional)* ***npm i -D cypress*** If cypress is not installed.

## Plugin
IntelliJ
- Cypress Support: Required.
- Gherkin: Required.
- Cucumber +: Recommended.


  Visual Studio Code
- Cucumber (Gherkin) Full Support: Required

## Usage

Run tests in UI
```bash
npx cypress open
```
Run a particular test with terminal in headless mode, on a chrome browser - **Runs the test completely in terminal**
```bash
npx cypress run --headless --browser chrome --spec cypress/e2e/{FileName}.feature
```
Run a particular test with terminal in headed mode, on a chrome browser - **Chrome window will open up showing test process**
```bash
npx cypress run --headed --browser chrome --spec cypress/e2e/{FileName}.feature
```
Run all tests with terminal in headless mode, on a chrome browser - **Runs the test completely in terminal**
```bash
npx cypress run --headless --browser chrome
```
Run all tests with terminal in headed mode, on a chrome browser - **Chrome window will open up showing test process**
```bash
npx cypress run --headed --browser chrome
```
Change browser type e.g. to run headed tests in firefox - **Browser needs to be installed to run it**
```bash
npx cypress run --headed --browser firefox --spec cypress/e2e/{FileName}.feature
```
**Alternatively you can run any of these steps in package.json by pressing the play button**

## New Cypress Project Guide

Refer to this document to create a [New Cypress project](https://docs.google.com/document/d/14R_HaKKP2gSjF6ZmPTzUzeIzFfoDHhOu/edit).