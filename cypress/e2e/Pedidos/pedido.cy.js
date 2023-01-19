/// <reference types="cypress" />

import loc from '../../support/locators'

describe('Teste E2E - Efetuar Pedido com Sucesso', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    });

    it('Deve: Realizar um pedido com sucesso', () => {

        
        cy.gui_login('standard_user','secret_sauce')
        //verifica se está na tela de produtos
        cy.get('.title').should('contain','Products')
        //seleciona o filtro no combo de menor para o maior.
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        // Valida se o produto que retornou é o menor preço:
        cy.get(':nth-child(1) > .inventory_item_description').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_description').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_description').should('contain','Sauce Labs Bolt T-Shirt')

        //Adicionar o primeiro item ao carrinho.        
        cy.adicionarItemCarrinho('Sauce Labs Onesie')
        //Adicionar o segundo item ao carrinho.        
        cy.adicionarItemCarrinho('Sauce Labs Bike Light')
        //Adicionar o terceiro item ao carrinho.
        cy.adicionarItemCarrinho('Sauce Labs Bolt T-Shirt')


        //Verifica quantidade no carrinho
        cy.get('.shopping_cart_badge').should('have.text','3')
        cy.get('.shopping_cart_badge').click()
        //Valida se os itens estão no carrinho:
        cy.get(loc.CARRINHO_ITENS.PRIMEIRO).should('contain' ,'Sauce Labs Onesie')
        cy.get(loc.CARRINHO_ITENS.SEGUNDO).should('contain' ,'Sauce Labs Bike Light')
        cy.get(loc.CARRINHO_ITENS.TERCEIRO).should('contain' ,'Sauce Labs Bolt T-Shirt')
        //Clica em Chckout
        cy.get('[data-test="checkout"]').click()
        //Informa os dados e avança
        cy.get('[data-test="firstName"]').type('Alex Soares')
        cy.get('[data-test="lastName"]').type('Soarez')
        cy.get('[data-test="postalCode"]').type('3070989898')
        cy.get('[data-test="continue"]').click()

        //Valida itens no checkout:
        cy.get(loc.CARRINHO_ITENS.PRIMEIRO).should('contain' ,'Sauce Labs Onesie')
        cy.get(loc.CARRINHO_ITENS.SEGUNDO).should('contain' ,'Sauce Labs Bike Light')
        cy.get(loc.CARRINHO_ITENS.TERCEIRO).should('contain' ,'Sauce Labs Bolt T-Shirt')
        cy.get('.summary_total_label').should('have.text', 'Total: $36.69')

        //finaliza:
        cy.get('[data-test="finish"]').click()

        //Validação final:
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
        
        
    });
});