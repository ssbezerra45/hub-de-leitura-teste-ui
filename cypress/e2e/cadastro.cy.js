/// <reference types="cypress" />
describe('Funcionalidade: Cadastro no Hub de leitura', () => {
    beforeEach(() => {
        cy.visit('register.html')
    });
    it('Deve fazer cadastro com sucesso', () => {
        cy.get('#name').type('Sergio Bezerra')
        cy.get('#email').type('sergio12@example.com')
        cy.get('#phone').type('11987654321')
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    
       
       
        
    });
    
});

