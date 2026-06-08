describe("This is the good first lesson", () => {

    beforeEach("It visits the home page", () => {
        // You can set-up environment variable for below
        // We'll see this in later video!
        // If you don't see the URL that means env variable is set...
        cy.visit("");
    });

    it("Verifies the header of the app", () => {
        // step-1: Go to Home Page
        // already taken take of in beforeEach hookß

        // step-2: Verify the header text
        /**
         * Command: cy.get(), .should() and .and()
         * Subject: 
         *  1) For cy.get() -> Selector: "#titleOfApp"
         *  2) For .should() -> DOM Element: yeilded from cy.get()
         *  3) For .and() -> DOM Element: yeilded from .shold()
         */
        cy.get(Cypress.env("title_of_app")).should("be.visible").and("have.text", "Welcome to AristaLabRequestor");

        // step-3: Verify the version of the application
        /**
         * Selector can be described in different way:
         *  1) #<id>
         *  2) element#<id>
         *  3) element[id='<id>']
         * 
         * Class selector
         *  1) .<class>
         *  2) element.<class>
         *  3) element[class='<class>']
         */
        cy.get(Cypress.env("version_of_app")).should("be.visible").and("have.text", "v4.1.1");

        // step-4: Verify the tools
        cy.get(Cypress.env("button_node_tool")).should("be.visible");
        cy.get(Cypress.env("button_connection_tool")).should("be.visible");
        cy.get(Cypress.env("button_output_tool")).should("be.visible");
        cy.get(Cypress.env("button_settings_tool")).should("be.visible");
        cy.get(Cypress.env("button_user_manual")).should("be.visible");
        cy.get(Cypress.env("button_report_an_issue")).should("be.visible");

        // step-5: Verify the information text
        cy.get(Cypress.env("label_info")).should("be.visible")
            .and("have.text", "  Select some tool to get started! Click on \"?\" Icon For Help.");
    });

    it("Verifies whether the node is working", () => {
        // step-1: Go to home page
        // already taken care of in beforeEach hook

        // step-2: click on node tool
        cy.get("button[title='Node Tool']").should("be.visible").click();

        // step-3: Verify the information text
        cy.get("#label_info").should("be.visible").invoke("text")
            .then((label_text) => {
                expect(label_text.trim()).to.match(/selected node tool/i);
            });
    });

    it("Verifies whether the connection tool is working", () => {
        // step-1: Go to home page
        // already taken care of in beforeEach hook

        // step-2: click on connection tool
        cy.get("button[title='Connection Tool']").should("be.visible").click();

        // step-3: Verify the information text
        cy.get("#label_info").should("be.visible").invoke("text")
            .then((label_text) => {
                expect(label_text.trim()).to.match(/selected connection tool/i);
            });
    });

    it("Verifies whether the User Maual button is working", () => {
        // step-1: Go to home page
        // already taken care of in beforeEach hook

        // step-2: click on User Manual button
        cy.get("button[title='User Manual']").should("be.visible").click();

        // step-3: Verify the url
        cy.url().should("include", "/AristaLabRequestor");
    });

});