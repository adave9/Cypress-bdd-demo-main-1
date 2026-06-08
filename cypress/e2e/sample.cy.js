describe('Testing Arista Lab Requestor', () => {
  beforeEach('We want to login', () => {
    console.log("Inside Before Each!");
  })

  afterEach('We want to clear the cache', () => {
    console.log("Inside After Each!");
  })

  it('Visits the home page', () => {
    cy.visit('https://henilmistry.github.io/AristaLabRequestor/')
  })

  after('We want to clear the local storage', () => {
    cy.log('clearing the local storage');
    console.log("Inside After!");
  })

  before('We want to set certain env variables', () => {
    cy.log('setting the env variables!');
    console.log("Inside Before!");
  })

  it('Perform 2nd Test Case', () => {

  })
})