/// <reference types="cypress" />

describe('Funcionalidade contato', () => {
  beforeEach(() => {
    cy.visit('index.html')
  });
   
    it('Deve preencher formulario de contato com sucesso', () => {
      cy.get('[name="name"]').type('Maria da Silva')
      cy.get('[name="email"]').type('maria@example.com')
      cy.get('[name="subject"]').select('Suporte Técnico')
    
      cy.get('[name="message"]').type('Olá, preciso de ajuda com meu pedido.')
      cy.get('#btn-submit').click()
      cy.get('#alert-container').should('contain', 'Contato enviado com sucesso!')
      
    });
    it('Deve validar mensagem de erro ao enviar sem preencher nome  ', () => {
      cy.get('[name="name"]').clear()
      cy.get('[name="email"]').type('maria@example.com')
      cy.get('[name="subject"]').select('Suporte Técnico')
    
      cy.get('[name="message"]').type('Olá, preciso de ajuda com meu pedido.')
      cy.get('#btn-submit').click()
      cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')
    
      
    }); 
    it('Deve validar mensagem de erro ao enviar sem preencher email  ', () => {
      cy.get('[name="name"]').type('Maria da Silva')
      cy.get('[name="email"]').clear()
      cy.get('[name="subject"]').select('Suporte Técnico')
    
      cy.get('[name="message"]').type('Olá, preciso de ajuda com meu pedido.')
      cy.get('#btn-submit').click()
      cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
      
      
    });
     it('Deve validar mensagem de erro ao enviar selecionar assunto  ', () => {
      cy.get('[name="name"]').type('Maria da Silva')
      cy.get('[name="email"]').type('maria@example.com')
     //cy.get('[name="subject"]').select('Suporte Técnico')
    
      cy.get('[name="message"]').type('Olá, preciso de ajuda com meu pedido.')
      cy.get('#btn-submit').click()
      cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
      
    });
    it('Deve validar mensagem de erro ao enviar preencher mensagem  ', () => {
      cy.get('[name="name"]').type('Maria da Silva')
      cy.get('[name="email"]').type('maria@example.com')
      cy.get('[name="subject"]').select('Suporte Técnico')
    
      cy.get('[name="message"]').clear()
      cy.get('#btn-submit').click()
      cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
     

    });
  
});