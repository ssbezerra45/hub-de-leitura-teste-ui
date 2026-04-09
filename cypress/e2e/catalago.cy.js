///<reference types="cypress" />

describe('Funcionalidade: Catálogo de livros', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });
    it.skip('Deve clicar no botão adicioanar à cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', '1')
    });
    it('Deve clicar em todos os botão adicionar à cesta', () => {
         cy.get('.btn-primary').click({ multiple: true })
         cy.get('#cart-count').should('contain', '12')
        
    });
    it('Deve clicar no primeiro botão adicionar á cesta', () => {
        cy.get('.btn-primary').first().click()
        cy.get('#cart-count').should('contain', '1')
        cy.get('#global-alert-container').should('contain','"1984" foi adicionado à cesta!')
    });
    it('Deve clicar no ultimo botão adicionar à cesta', () => {
        cy.get('.btn-primary').last().click()
        cy.get('#global-alert-container').should('contain',' "O Alquimista" foi adicionado à cesta!')
        
    });
    it('Deve clicar no terceiro botão adicionar à cesta', () => {
        cy.get('.btn-primary').eq(2).click()
        cy.get('#cart-count').should('contain', '1')
        cy.get('#global-alert-container').should('contain','A Divina Comédia')
        
    });
    it('Deve clicar no terceiro botão adicionar à cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        cy.get('#global-alert-container').should('contain','A Metamorfose')
        cy.contains('A Metamorfose').should('exist')


    });
    it('Deve clicar no nome do livro e direcionar a tela do livro', () => {
        cy.contains('Dom Casmurro').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso')
    });


    
    });                 