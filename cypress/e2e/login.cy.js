/// <reference types="cypress"/>

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  it("deve realizar login", () => {
    cy.get("#username").type("nicolas@gmail.com");
    cy.get("#password").type("1234");
    cy.get("input[name=login]").click();

    cy.get(".woocommerce-MyAccount-content").should("contain", "Olá, nicolas");
  });

  it("deve mostrar mensagem de erro ao errar email", () => {
    cy.get("#username").type("nicolas@orkut.com");
    cy.get("#password").type("1234");
    cy.get("input[name=login]").click();

    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("contain", "Endereço de e-mail desconhecido");
  });

  it("deve mostrar mensagem de erro ao errar senha", () => {
    cy.get("#username").type("nicolas@gmail.com");
    cy.get("#password").type("123456789");
    cy.get("input[name=login]").click();

    cy.get(".woocommerce-error")
      .should("be.visible")
      .and(
        "contain",
        "A senha fornecida para o e-mail nicolas@gmail.com está incorreta."
      );
  });
});
