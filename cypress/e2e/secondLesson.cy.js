describe("It showcases the use of Cypress Environment variables", 
    {
        env: {
            some_value: "from-describe"
        }
    },() => {

    beforeEach("Goes to baseUrl", () => {
        cy.log(Cypress.env("some_value"));
        cy.visit("");
    })

    it("Prints some environment variables", () => {
        console.log(Cypress.env("some_value"));
        /**
         * Method-2 of Using Cypress Environment Variables.
         * -> Using file `cypress.env.json`
         * -> Great Stuff if you need such variables which need 
         * not to be constant across all machines.
         * -> Gteat stuff if you want to hide sensitive information.
         * -> Supports nested fields too.
         */
        console.log(Cypress.env("username"));
        console.log(Cypress.env("password"));
        console.log(Cypress.env("another_value"));
    });

    it("Again prints the some value", () => {
        console.log(Cypress.env('some_value'));
    });

});