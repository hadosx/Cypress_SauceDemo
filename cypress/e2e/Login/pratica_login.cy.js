/// <reference types="cypress" /> 
//Referencia para o cypress reconhecer o arquivo de teste


describe('Teste funcional de Login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    });

    it('Deve efetuar o login com sucesso', () => {
        cy.pratica_login('standard_user','secret_sauce')
        cy.get('.title').should('contain','Products') 
    });

    it('Deve validar usuário incorreto', () => {
        cy.pratica_login('standard_use','secret_sauce')
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    });

    it('Deve validar Senha Incorreta', () => {
        cy.pratica_login('standard_user','secret_sauc')
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    });
});