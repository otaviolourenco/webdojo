/*
 * Teste de Login no sistema, para validar o fluxo de autenticação.
 * Autor: Otávio Lourenço
 * Data: 04/10/2025
 */
import { getTodaysDate } from '../support/util';

describe('login', () => {
  beforeEach(() => {
    cy.start();
  });

  // Fluxo de login com sucesso
  it('Deve logar com sucesso', () => {
    cy.submitLoginForm('papito@webdojo.com', 'katana123');
    // Verificar se o login foi bem sucedido, validando se o nome do usuário aparece na tela
    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito');

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and(
        'have.text',
        'Olá QA, esse é o seu Dojo para aprender Automação de Testes.',
      );

    cy.getCookie('login_date').should('exist');
    cy.getCookie('login_date').should((cookie) => {
      expect(cookie.value).to.eq(getTodaysDate());
    });

    cy.window().then((win) => {
      const token = win.localStorage.getItem('token');
      expect(token).to.match(/^[a-fA-F0-9]{32}$/);
    });
  });

  // Fluxo de login com falha, senha inválida
  it('Não deve logar com senha inválida', () => {
    cy.submitLoginForm('papito@webdojo.com', 'katana567');
    // Verificar se a mensagem de erro aparece na tela
    cy.contains('Acesso negado! Tente novamente.').should('be.visible');
  });

  // Fluxo de login com falha, email inválido
  it('Não deve logar com senha inválida', () => {
    cy.submitLoginForm('papito@email.com', 'katana123');
    // Verificar se a mensagem de erro aparece na tela
    cy.contains('Acesso negado! Tente novamente.').should('be.visible');
  });
});
