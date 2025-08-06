///<reference types="cypress"/>

const dados = require("../fixtures/login.json")

describe("Funcionalidade de login", () => {
    beforeEach(() => {
        cy.visit("minha-conta/")
    });

    it('Deve fazer login com sucesso', () => {
        cy.login(dados.login, dados.senha, dados.nome)
    });

    it('Deve mostrar mensagem de erro ao tentar logar com dados ausentes', () => {
        cy.get("input[type=submit][name=login]").click()
        cy.get(".woocommerce-error").should("contain", "Erro: Nome de usuário é obrigatório.")
    });
})