# Introduction

This file covers all about fourth lesson on Cypress Playlist on YouTube as part of Video Geeks YT Channel. Fourth Lesson is all about fixtures and commands in Cypress.

# Fixture in Cypress

## Introduction

Fixture is nothing but the way to load the static files into your Cypress tests. You might already have a folder named `fixtures/` inside `cypress/` directory. You can specify any static files into that folder that use them later into Cypress tests.

## How to load fixture

To load any of the fixture files into your Cypress Tests, you can use below snippet. Assuming that you have file named "data.json".

```

let fixture_data = null; 
cy.fixture("data.json").then((data) => {
    fixture_data = data;
})

```

# Custom Cypress Commands

## Introduction

Cypress provides the ability to write custom commands. You can use custom commands to perform repeated tasks in your tests very easily.

## How to write custom commands

You already have an folder named `support/` inside `cypress/` and inside that, you'll have a file named `commands.js`. You can use that file to describe any custom commands using below snippet.

```

Cypress.Commands.add('<name-of-command>', (<args>) => {
    /**
     *  <=== Function Body ===>
     *  You can describe the function body here.
     */
})

```

## How to use custom commands

Once you've declared some of the custom commands inside `commands.js` file inside `cypress/support` directory, you can start using like normal cypress commands inside any of your spec files.

```

cy.<name-of-command>(<args>);

```