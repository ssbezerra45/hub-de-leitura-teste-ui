/// <reference types="cypress" />
import user from '../fixtures/usuario.json'
describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('login.html')
    }); 
    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type("usuario@teste.com")
        cy.get('#password').type("user123")
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')
    });
    it('Deve fazer login com suecesso - Usando comandos customizados', () => {
        cy.login("usuario@teste.com", "user123")
        
    });
    it('Deve fazer login com suecesso usando a conta admin -usando comandos customizados', () => {

        cy.login("admin@biblioteca.com", "admin123")
    });
    it('Deve fazer login com sucesso -Usando importação de massa de dados', () => {
        cy.login(user.name, user.senha)
        cy.url().should('include', 'dashboard')
    });
        
    });




