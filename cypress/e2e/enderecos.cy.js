/// <reference types="cypress"/>

const dados = require("../fixtures/login.json");

describe("Preenchimento dos campos de endereços", () => {
  beforeEach(() => {
    cy.visit("minha-conta/");
  });

  it("Deve preencher os dados de endereço de faturamento com sucesso", () => {
    cy.login(dados.login, dados.senha, dados.nome);
    cy.get(".woocommerce-MyAccount-navigation-link--edit-address").click();
    cy.get("h3").contains("Billing Address").siblings("a.edit").click();

    cy.get("#billing_first_name").clear().type("Nicolas Felipe");
    cy.get("#billing_last_name").clear().type("da Silva");

    cy.get("span[aria-label=País]").click();
    cy.get("input[type=text].select2-search__field")
      .click()
      .type("Brasil")
      .get("li[aria-selected=true]")
      .click();

		cy.get('#billing_address_1').clear().type("Rua Alguma coisa")
		cy.get('#billing_address_2').clear().type(35)
		cy.get('#billing_city').clear().type("São Paulo")

		cy.get("span[aria-label=Estado]").click();
		cy.get("input[type=text].select2-search__field")
      .click()
      .type("Santa Catarina")
      .get("li[aria-selected=true]")
      .click();

		cy.get('#billing_postcode').clear().type("12345-678")
		cy.get('#billing_phone').clear().type("+5512345567890")
		cy.get("button[type=submit][name=save_address]").click()

		cy.get(".woocommerce-message").should("contain", "Endereço alterado com sucesso.")
  });
});
