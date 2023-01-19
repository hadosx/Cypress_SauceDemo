/// <reference types="cypress" />

describe('API - Teste Funcional de Login', () => {

    it('Efetuar login com sucesso', ()=>{
        cy.api_login('fulano@qa.com','teste').then((response) =>{
            
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        },)
       

    });

    it.only('Efetuar login com e-mail INVÁLIDO', ()=>{
        cy.api_login('invalid@qa.com','teste').then((response) =>{
            
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    });

    it('Efetuar login com senha em Branco', ()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": ""
            },
            failOnStatusCode: false
        }).then((response) =>{
            expect(response.status).to.equal(400)
            expect(response.body.password).to.equal('password não pode ficar em branco')
        })
    })
    
});