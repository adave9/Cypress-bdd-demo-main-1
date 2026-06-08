const { defineConfig } = require("cypress");

module.exports = defineConfig({
  /**
   * Method-1 of Using Cypress Environment Variables.
   * -> Great stuff if you need values to be constant across
   * all machines.
   */
  env:{
    some_value: "henil",

    /**
     * You can set-up env variables for the elements
     * of the app that can be found in DOM.
     * 
     * PROS:
     *  1) You can change selector here and it gets changed
     *    everywhere it has been used.
     * 
     * CONS:
     *  1) Need to keep managing the selectors in env varibles
     *    for every new test cases.
     */
    title_of_app: "#titleOfApp",
    version_of_app: "b[id='versionOfApp']",
    label_info: "#label_info",

    button_node_tool: "button[title='Node Tool']",
    button_connection_tool: "button[title='Connection Tool']",
    button_output_tool: "button[title='Output Tool']",
    button_settings_tool: "button[title='Settings Tool']",
    button_user_manual: "button[title='User Manual']",
    button_report_an_issue: "button[title='Report an issue']",

    /**
     * These are general modal header, body and footer
     * which can be re-used to to interact with elements
     * within different modals...
     * 
     * E.g. You can use cy.get() on modals and the use 
     *      cy.find() to find these inside the element that
     *      has been found from cy.get().
     */
    modal_header: "div[class='modal-header']",
    modal_body: "div[class='modal-body']",
    modal_footer: "div[class='modal-footer']",

    modal_node_config: "#nodeConfigModal",
    modal_node_config_node_type: "#nodeType",
    modal_node_config_node_alias: "#nodeAlias",
    modal_node_config_location: "#nodeLocation",
    modal_node_config_enable_move_to: "#enableMoveTo",
    modal_node_config_move_to: "#moveTo",
  },
  e2e: {
    baseUrl: "https://henilmistry.github.io/AristaLabRequestor/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      /**
       * Method-3 of Using Cypress Environment Variables.
       * -> Mostly used from CI Runners.
       */
      config.env.another_value = process.env.CYPRESS_another_value || config.env.another_value;
    },
  },
});
