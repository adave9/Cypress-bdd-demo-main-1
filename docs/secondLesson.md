# Introduction

This file covers the session overview for the video that is covered as part of playlist of Cypress on Video Geeks YouTube channel. This file covers information about Cypress Environment variables; What are the different ways you can declare it and use it.

## Why we need?

Environment variables are useful when:

- Values are different across all machines. 
- Values are different across different environments. E.g. dev, staging, prod, etc.
- Values might not change at all across all machines, all environments.

# How to use?

If you want to use cypress environment variables, it's preety simple. Cypress takes all declared environment variables into a single object `Cypress.env()` regardless what is the method to declare it and, if you want to use them you can do it using below example.

```
// assuming 'username' is env. variable...
// you can access it like this...
Cypress.env('username');

Cypress.env(); // --> is an object
```

# How to declare?

You can declare cypress environment variables using below methods...

## Method-1: configuration file

You might have `cypress.config.js` file by default after you ran `npx cypress open` command for the first time. You can use that file for declaration of environment variables that needs to be same across all machines and all environments.

```
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '128076ed-9868-4e98-9cef-98dd8b705d75',
  env: {
    login_url: '/login',
    products_url: '/products',
  },
})
```

## Method-2: `cypress.env.json` file

You can create `cypress.env.json` file inside your parent or root directory and cypress will automatically detect this file. All the key-value pairs will be treated as environment variables by default. You can use this file to declare the enviroment variables which needs to be same across all machines or some sensitive information like usernames and passwords.

```
{
    "username": "henil",
    "password": "henil@123"
}
```

Note: Please make sure to add this file to `gitignore` and do not commit this to public git repositories.

## Method-3: Using `CYPRESS_`

Any exported environment variables set on the command line or in your CI provider that start with either `CYPRESS_` or `cypress_` will automatically be parsed by Cypress. The environment variable `CYPRESS_INTERNAL_ENV` is reserved and should not be set.

## Method-4: Using `--env` flag from CLI

While running Cypress, you can use `--env` flag to pass environment variables. You can use `,` commans to separate multiple vales.

```
> npx cypress open --env username=josh,password=1234567890
```

## Method-5: From within Test Configuration

You can set environment variables for specific suites or tests by passing the env values to the test configuration.

```
// change environment variable for single suite of tests
describe(
  'test against Spanish content',
  {
    env: {
      language: 'es',
    },
  },
  () => {
    it('displays Spanish', () => {
      cy.visit(`https://docs.cypress.io/${Cypress.env('language')}/`)
      cy.contains('¿Por qué Cypress?')
    })
  }
)
```

You can also change it for single test

```
// change environment variable for single test
it(
  'smoke test develop api',
  {
    env: {
      api: 'https://dev.myapi.com',
    },
  },
  () => {
    cy.request(Cypress.env('api')).its('status').should('eq', 200)
  }
)

// change environment variable for single test
it(
  'smoke test staging api',
  {
    env: {
      api: 'https://staging.myapi.com',
    },
  },
  () => {
    cy.request(Cypress.env('api')).its('status').should('eq', 200)
  }
)
```

