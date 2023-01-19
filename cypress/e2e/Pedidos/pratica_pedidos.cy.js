/// <reference types="cypress" /> 
import loc from '../../support/pratica_locators'
describe('Teste E2E - Realizando um pedido de produto com sucesso', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com')
    });
    it('Deve logar e relaizar um pedido de produto com sucesso', () => {
        cy.pratica_login('standard_user','secret_sauce')
        //Verifica se logou checando o título de Produtos:
        cy.get('.title').should('contain','Products') 
        //Seleciona o filtro dos podutos com preço de menor para maior:
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        //Realiza a checagem da ordem dos itens com menos preço:
        cy.get(loc.PRODUTOS_ITENS.PRIMEIRO).should('contain','Sauce Labs Onesie')
        cy.get(loc.PRODUTOS_ITENS.SEGUNDO).should('contain','Sauce Labs Bike Light')
        cy.get(loc.PRODUTOS_ITENS.TERCEIRO).should('contain','Sauce Labs Bolt T-Shirt')
        //entrar no produto e adicionar ao carrinho:

        cy.adicionar_carrinho('Sauce Labs Onesie')
        cy.adicionar_carrinho('Sauce Labs Bike Light')
        cy.adicionar_carrinho('Sauce Labs Bolt T-Shirt')

        cy.get('.shopping_cart_link').should('contain', '3')
        cy.get('.shopping_cart_link').click()
        //Verifica se os produtos estão no carrinho:
        cy.get(loc.CARRINHO_ITENS.PRIMEIRO).should('contain','Sauce Labs Onesie')
        cy.get(loc.CARRINHO_ITENS.SEGUNDO).should('contain','Sauce Labs Bike Light')
        cy.get(loc.CARRINHO_ITENS.TERCEIRO).should('contain','Sauce Labs Bolt T-Shirt')

        //Clica em checkout:
        cy.get('[data-test="checkout"]').click()
        //Validando a obrigatoriedade dos campos:
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain','Error: First Name is required')

        cy.informa_Dados()

        //Verificando o checkout:
        cy.get('.cart_list > :nth-child(3)').should('contain','Sauce Labs Onesie')
        cy.get('.cart_list > :nth-child(3)').should('contain','$7.99')

        cy.get('.summary_total_label').should('contain','$36.69')

        cy.get('[data-test="finish"]').click()
        cy.scrollTo(500,0)



    });
});