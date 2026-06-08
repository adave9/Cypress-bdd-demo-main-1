// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addNodeOnCanvas', (node) => {
    // step-1: double click on the canvas
    cy.get("canvas").dblclick(node.x, node.y);
    cy.get(Cypress.env("modal_node_config")).should("be.visible");
    
    // step-2: choose node type
    cy.get(Cypress.env("modal_node_config")).find("#nodeType").select(node.type);

    // step-3: enter node alias 
    cy.get(Cypress.env("modal_node_config")).find("#nodeAlias")
        .clear().type(node.alias);

    // step-4: enter location
    cy.get(Cypress.env("modal_node_config")).find("#nodeLocation")
        .clear().type(node.location);

    // step-5: choose move to
    if (node.type != "IXIA") {
        if (typeof node.moveto === "boolean") {
            cy.get(Cypress.env("modal_node_config")).find("#enableMoveTo").uncheck();
        } else {
            cy.get(Cypress.env("modal_node_config")).find("#enableMoveTo").check();
            cy.get(Cypress.env("modal_node_config")).find("#moveTo")
                .clear().type(node.moveto);
        }
    }

    // step-6: click on configure
    cy.get(Cypress.env("modal_node_config")).find(Cypress.env("modal_footer"))
        .find("button").click();
    cy.get(Cypress.env("modal_node_config")).should("not.be.visible");
});