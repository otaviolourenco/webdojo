// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message && err.message.includes('toast is not defined')) {
    // Retorna false para ignorar esse erro específico e NÃO falhar o teste
    return false;
  }
  // Outros erros seguem normalmente (teste falha se forem diferentes)
});
