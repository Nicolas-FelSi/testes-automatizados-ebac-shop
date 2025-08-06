///<reference types="cypress"/>

const { faker } = require("@faker-js/faker");

describe("Funcionalidade de cadastro", () => {
  beforeEach(() => {
    cy.visit("minha-conta/");
  });

  it("Deve cadastrar o usuário com sucesso", () => {
    const emailFaker = faker.internet.email();
    const passwordFaker = faker.internet.password();

    cy.get("#reg_email").type(emailFaker);
    cy.get("#reg_password").type(passwordFaker);
    cy.get("input[type=submit][name=register]").click();
    cy.get(".woocommerce-MyAccount-content")
      .should("contain", "Olá")
      .and("contain", "A partir do painel de controle de sua conta");
  });

  it("Deve mostrar mensagem de erro ao tentar cadastrar com dados ausentes", () => {
    cy.get("input[type=submit][name=register]").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Erro: Informe um endereço de e-mail válido."
    );
  });
});
