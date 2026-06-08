describe("It's third lesson showcasing the use of Assertions in Cypress", () => {

    let nodes;

    beforeEach("Visits the github page and selects node tool", () => {
        cy.visit("");
        cy.get(Cypress.env("button_node_tool")).click();
        cy.fixture("nodes").then((data) => {
            nodes = data;
        });
    });

    it("Verifies that the node cofig modal is working fine", () => {
        // step-1: double click on canvas...
        /**
         * TYPE-1: We assert the Visibility
         */
        cy.get(Cypress.env("modal_node_config")).should("not.be.visible");
        cy.get("canvas").dblclick(300, 300);

        // step-2: verify whether the node config modal is visible...
        /**
         * TYPE-2: We assert Attributes or classes
         * STEP-4 for Example of Assertion with attribue...
         */
        cy.get(Cypress.env("modal_node_config")).should("be.visible")
            .and("have.class", "show");
        /**
         * TYPE-3: We assert for the state of element
         */
        cy.get(Cypress.env("modal_node_config")).find(Cypress.env("modal_body"))
            .find(Cypress.env("modal_node_config_enable_move_to")).should("be.checked");
        /**
         * TYPE-4: We assert for the length or count
         */
        cy.get(Cypress.env("modal_node_config")).find(Cypress.env("modal_body"))
            .find("input").should("have.length", 4);

        // step-3: close the node config modal..
        cy.get(Cypress.env("modal_node_config")).find(Cypress.env("modal_header"))
            .find("button").click();

        // step-4: verify whether the node config modal is not visible...
        /**
         * TYPE-2: We assert Attributes or classes
         */
        cy.get(Cypress.env("modal_node_config")).should("not.be.visible")
            .and("have.attr", "aria-hidden", "true");

        // step-5: verify that node is not added to the canvas...
        cy.get("canvas").click(300, 300);
        /**
         * TYPE-5: Contains or matches value
         * explicit assertion -> asserting that text that has been invoked from
         *                      `Cypress.env("label_info")` matches the Reg.Exp.
         */
        cy.get(Cypress.env("label_info")).invoke("text")
            .then((text) => {
                expect(text.trim()).to.match(/selected node tool/i);
            });
    });

    it("Verifies that we're able to add the DUT to canvas", () => {
        // step-1: double click on the canvas
        cy.get("canvas").dblclick(nodes.node1.x, nodes.node1.y);
        cy.get(Cypress.env("modal_node_config")).should("be.visible");
        
        // step-2: choose node type -> DUT
        cy.get(Cypress.env("modal_node_config")).find("#nodeType").select(nodes.node1.type);

        // step-3: enter node alias 
        cy.get(Cypress.env("modal_node_config")).find("#nodeAlias")
            .clear().type(nodes.node1.alias);

        // step-4: enter location
        cy.get(Cypress.env("modal_node_config")).find("#nodeLocation")
            .clear().type(nodes.node1.location);

        // step-5: choose move to
        if (typeof nodes.node1.moveto === "boolean") {
            cy.get(Cypress.env("modal_node_config")).find("#enableMoveTo").uncheck();
        } else {
            cy.get(Cypress.env("modal_node_config")).find("#enableMoveTo").check();
            cy.get(Cypress.env("modal_node_config")).find("#moveTo")
                .clear().type(nodes.node1.moveto);
        }

        // step-6: click on configure
        cy.get(Cypress.env("modal_node_config")).find(Cypress.env("modal_footer"))
            .find("button").click();
        cy.get(Cypress.env("modal_node_config")).should("not.be.visible");

        // step-7: click on the same position
        cy.get("canvas").click(nodes.node1.x, nodes.node1.y);

        // step-8: verify the label
        cy.get(Cypress.env("label_info")).invoke("text")
            .then((text) => {
                expect(text.trim()).to.match(/selected node/i);
            });
    });

    it("Verifies that we're able to add the IXIA to canvas", () => {
        
        cy.addNodeOnCanvas(nodes.node2);

        // step-7: click on the same position
        cy.get("canvas").click(nodes.node2.x, nodes.node2.y);

        // step-8: verify the label
        cy.get(Cypress.env("label_info")).invoke("text")
            .then((text) => {
                expect(text.trim()).to.match(/selected node/i);
            });
    });

});