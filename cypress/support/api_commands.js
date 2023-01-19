/// <reference types="cypress" />

Cypress.Commands.add('api_login', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
            "email": username,
            "password": password
        },
        failOnStatusCode: false
    }).then((response) =>{
        return response
    })
});

