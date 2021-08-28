// Comment to tell eslint im using ui bdd (describe, it, etc.)
/* eslint-env mocha */
/* global cy */
describe("The home page", function() {
  it("Successfully loads", function() {
    cy.visit("/");
  });
});
