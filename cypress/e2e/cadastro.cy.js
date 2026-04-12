/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro no Hub de leitura', () => {
    beforeEach(() => {
        cadastroPage.visitarPaginadeCadastro()
    });
    it('Deve fazer cadastro com sucesso usando função Js', () => {
        let email = `sergio${Date.now()}@example.com`
        cy.get('#name').type('Sergio Bezerra')
        cy.get('#email').type(email)
        cy.get('#phone').type('11987654321')
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });
    it('Deve fazer cadastro com sucesso usando faker', () => {
        let telefone = faker.phone.number('119########')
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type(telefone)
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    it('Deve fazer cadastro com sucesso -Usando comando customizado', () => {
        let email = `sergio${Date.now()}@example.com`
        let nome = faker.person.fullName({ sex: 'female' })
        let telefone = faker.phone.number('119########')
        cy.preencherCadastro(nome, email, telefone, 'senha123', 'senha123')
        cy.url().should('include', 'dashboard')
    });
    it('Deve  fazer cadastro com sucesso - Usando Page Objects', () => {
        let email = `sergio${Date.now()}@example.com`
        cadastroPage.preencherCadastro('Sergio Bezerra', email, '11987654321', 'senha123', 'senha123')
        cy.url().should('include', 'dashboard')
    });
    it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
        cadastroPage.preencherCadastro('', 'email@example.com', '11987654321', 'senha123', 'senha123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', "Nome deve ter pelo menos 2 caracteres")

    });
    it.only('Deve validar mensagem ao tentar cadastrar sem preencher email', () => {
        cadastroPage.preencherCadastro('Sergio Bezerra', '', '11987654321', 'senha123', 'senha123')
       cy.get('#register-form > :nth-child(2) > .invalid-feedback').should('contain', "Email válido é obrigatório")

    });



});
