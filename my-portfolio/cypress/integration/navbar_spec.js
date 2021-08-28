// Comment to tell eslint im using ui bdd (describe, it, etc.)
/* eslint-env mocha */
/* global cy */
const path = require("path");

describe("My first test", function() {
  it("Visit the site", function() {
    cy.visit("/");
  });
  it("Access about me section", function() {
    cy.viewport("macbook-16");
    cy.get(".navbar-item")
      .contains("About")
      .click();
    cy.url().should("include", "#about-me");
  });
  it("Access my projects section", function() {
    cy.viewport("macbook-16");
    cy.get(".navbar-item")
      .contains("project")
      .click();
    cy.url().should("include", "#projects");
  });
  it("Access contact section", function() {
    cy.viewport("macbook-16");
    cy.get(".navbar-item")
      .contains("contact", { matchCase: false })
      .click();
    cy.url().should("include", "#contact");
  });
  it("Download CV", function() {
    cy.viewport("macbook-16");
    cy.get(".navbar-item")
      .contains("download", { matchCase: false })
      .click();

    // Check if downloaded correctly
    cy.readFile(
      path.join("/Users/rousah/Downloads/", "CV_rosa_van_der_heide_english.pdf")
    ).should("exist");
  });
});
