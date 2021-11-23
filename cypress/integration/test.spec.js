/// <reference types="cypress" />

describe('testing the title', () => {
    it('test the title', () => {
        cy.visit('/')
        cy.get('#title').invoke('html').should('eq', 'titulo')
    })
})