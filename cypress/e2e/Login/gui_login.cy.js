/// <reference types="cypress" />

describe('Teste funcional de Login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    })

    it('Deve: efetuar o login com sucesso', () => {

        cy.gui_login('standard_user', 'secret_sauce')
        cy.get('.title').should('contain', 'Products')

    });

    it('Deve: erro de login inválido', () => {

        cy.gui_login('incorreto', 'secret_sauce')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });


});
