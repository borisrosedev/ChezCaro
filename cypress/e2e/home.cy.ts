/// <reference types="cypress" />
describe("Home Test", () => {
  it("Visits the App", () => {
    cy.visit("http://localhost:8080")
    cy.get("h1").should("contain.text", "Home View")
  })
})
