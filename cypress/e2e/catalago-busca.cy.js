/// <reference types="cypress" />
import catalago from '../fixtures/livros.json'

describe('Funcionalidade: busca no catalago', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });
    it('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        cy.get('.card-title').should('contain', '1984')
        
    });
      it('Deve fazer a busca de um livro do arqivo de massa de dados', () => {
        cy.get('#search-input').type(catalago[2].livro)
        cy.get('.card-title').should('contain', catalago[2].livro)
        
    });
});