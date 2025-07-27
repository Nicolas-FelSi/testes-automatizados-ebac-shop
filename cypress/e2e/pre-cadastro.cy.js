/// <reference types="cypress"/>

const { faker } = require("@faker-js/faker")

describe("Pré cadastro", () => {
	it("Realizar pré-cadastro com sucesso", () => {
		cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")

		cy.get("#reg_email").type(faker.internet.email())
		cy.get('#reg_password').type("SenhaForte123@")
		cy.get("input[name=register]").click()

		cy.get(".woocommerce-MyAccount-navigation-link--edit-account").click()

		cy.get('#account_first_name').type(faker.person.firstName())
		cy.get('#account_last_name').type(faker.person.lastName())
		cy.get("button[name=save_account_details]").click()

		cy.get(".woocommerce-message").should("be.visible").and("contain","Detalhes da conta modificados com sucesso.")
	})
})