# Introduction
This readme contains all information about `firstLesson.cy.js` file. This spec file is most likely to be in `cypress/e2e/` folder.

## Topics Covered
These are the topics covered:

1. What is Core Part of Automation Tests
2. Querying Elements
    a. Cypress is like JQuery
    b. Cypress is not like JQuery
    c. Querying by Text Content
    d. When Elements are missing
    e. Timeouts in Cypress
3. Chains of Commands
    a. Interacting with Elements
    b. Asserting About Elements
    c. Subject Management
    d. Asynchronous Commands

# Automation Tests
The automation tests are mostly involving these two items:

1. Querying Elements
    a. We use Selectors to query elements
    b. Selector helps uniquely identify the element
    c. e.g. Class, Id, etc.
2. Asserting Values
    a. We assert elements to be in specific state
    b. We assert element to have certain value
    c. We assert the negation of both of the above
    d. Etc.
3. Interacting with Elements
    a. We type into input fields
    b. We click on some button(s)
    c. We scroll the window
    d. We focus on certain element
    e. Etc.