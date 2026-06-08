# Introduction

This file covers brief overview of third lesson as part of Cypress Videos covered on Video Geeks YouTube channel. This file covers topic: "Assertions in Cypress".

# What is Assertion?

## As simple as `English`

In layman term, the word `Assertion` represents validation of something. In Cypress `Assertion` describes the state of an `element`, `object` or your `Application`. Assertions are always automatically retried until timeout in Cypress. Also, they have very simple way of describing or using them.

E.g. What assertion you want to perfomrm is exactly what you need to write. You can read the code snippet below.

```
// It find a button and click on it...
cy.get('button').click();

// Then it assert that whether it should have a class 'active'
cy.get('button').should('have.class', 'active');
```

## Implicit Assertions

Many of the cypress commands have implicit / built-in assertions with them.

E.g.

1. `cy.visit()` expects that the page should send the `text/html` content with `200` status code.

2. `cy.get()` expects an element to exist in the DOM.

etc...

Although all the assertions that uses `.should()` and `.and()` those are implicit assertions.

## Explicit Assertions

The assertions that uses `expect` and `assert` are explicit assertions.

E.g.

```
expect(true).to.equal(true);
```