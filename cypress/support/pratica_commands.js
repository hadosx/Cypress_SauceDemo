/// <reference types='Cypress'/>

Cypress.Commands.add('pratica_login', (username, password)=>{
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('informa_Dados', ()=>{
    cy.get('[data-test="firstName"]').type('Nome Teste Cypress')
    cy.get('[data-test="lastName"]').type('Curso Cypress')
    cy.get('[data-test="postalCode"]').type('74843100')
    cy.get('[data-test="continue"]').click()
})

Cypress.Commands.add('adicionar_carrinho',(produto)=>{
    cy.contains(produto).click()
    cy.get('.btn_primary').click() //É uma classe por isso utiliza "." antes. Se for id utiliza #
    cy.get('[data-test="back-to-products"]').click()
})