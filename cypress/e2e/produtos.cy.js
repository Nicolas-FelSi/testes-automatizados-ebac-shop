/// <reference types="cypress"/>

describe("Funcionalidade de produtos", () => {
  beforeEach(() => {
    cy.visit("produtos/");
  });

  it("Deve clicar em um produto", () => {
    cy.get("[class='product-block grid']")
      .contains("Ariel Roll Sleeve Sweatshirt")
      .click();
    cy.get(".product_title").should("contain", "Ariel Roll Sleeve Sweatshirt");
  });

  it("Deve adicionar produto no carrinho", () => {
		const quantidade = 2;

    cy.get("[class='product-block grid']")
      .contains("Ariel Roll Sleeve Sweatshirt")
      .click();
    cy.get("li[data-title=L]").wait(100).click();
    cy.get("li[data-title=Green]").click();
		cy.get("input[type=number][name=quantity]").clear().type(quantidade);
		cy.get("button[type=submit].single_add_to_cart_button").click();
		cy.get('a.mini-cart > span.mini-cart-items').should("contain", quantidade);
		cy.get(".woocommerce-message").should("contain",`${quantidade} × “Ariel Roll Sleeve Sweatshirt”`);
  });
});
