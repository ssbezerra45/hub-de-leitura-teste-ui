/// <reference types="cypress" />

describe('Funcionalidade contato', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/index.html')
  });
   
    it('Deve preencher formulario de contato com sucesso', () => {
      cy.get('[name="name"]').type('Maria da Silva')
      cy.get('[name="email"]').type('maria@example.com')
      cy.get('[name="subject"]').select('Suporte Técnico')
    
      cy.get('[name="message"]').type('Olá, preciso de ajuda com meu pedido.')
      cy.get('#btn-submit').click()
      cy.get('#alert-container').should('contain', 'Contato enviado com sucesso!')
      
    });   
  
});