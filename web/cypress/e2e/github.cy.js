describe('Gerenciamento de perfis no GitHub', () => {
  beforeEach(() => {
    cy.login();
    cy.goTo('Tabela', 'Perfis do GitHub');
  });

  it('Deve poder cadastrar novo perfil no GitHub', () => {
    cy.get('#name').type('Otávio Lourenço');
    cy.get('#username').type('otaviolourenco');
    cy.get('#profile').type('Developer/QA');
    cy.contains('button', 'Adicionar Perfil').click();

    cy.contains('table tbody tr', 'Otávio Lourenço')
      .should('be.visible')
      .as('trProfile');

    cy.get('@trProfile').contains('td', 'otaviolourenco').should('be.visible');

    cy.get('@trProfile').contains('td', 'Developer/QA').should('be.visible');
  });

  it('Deve poder remover um perfil do GitHub', () => {
    const profile = {
      name: 'Otávio Lourenço',
      username: 'otaviolourenco',
      role: 'Developer/QA',
    };

    cy.get('#name').type(profile.name);
    cy.get('#username').type(profile.username);
    cy.get('#profile').type(profile.role);
    cy.contains('button', 'Adicionar Perfil').click();

    cy.contains('table tbody tr', profile.username)
      .should('be.visible')
      .as('trProfile');

    cy.get('@trProfile').find('button[title="Remover perfil"]').click();

    cy.contains('table tbody', profile.username).should('not.exist');
  });

  it('Deve validar link do GitHub', () => {
    const profile = {
      name: 'Otávio Lourenço',
      username: 'otaviolourenco',
      role: 'Developer/QA',
    };

    cy.get('#name').type(profile.name);
    cy.get('#username').type(profile.username);
    cy.get('#profile').type(profile.role);
    cy.contains('button', 'Adicionar Perfil').click();

    cy.contains('table tbody tr', profile.username)
      .should('be.visible')
      .as('trProfile');

    cy.get('@trProfile')
      .find('a')
      .should('have.attr', 'href', 'https://github.com/' + profile.username)
      .should('have.attr', 'target', '_blank');
  });
});
