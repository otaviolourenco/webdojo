describe('Links devem abrir em outra aba', () => {
  it('Validando atribulo link do Intagram', () => {
    cy.login();

    cy.get('[data-cy="instagram-link"]')
      .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
      .and('have.attr', 'target', '_blank');
  });

  it('Acessando o link dos termos de uso, removendo o target', () => {
    cy.start();
    cy.submitLoginForm('papito@webdojo.com', 'katana123');

    cy.contains('Formulários').click();
    cy.contains('a', 'termos de uso').invoke('removeAttr', 'target').click();
    cy.contains('1. Aceitação dos Termos').should('be.visible');
  });
});
