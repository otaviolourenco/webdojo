# Documentação de Testes Automatizados - Webdojo (Cypress)

## Visão Geral

Este projeto implementa testes automatizados para a aplicação **Webdojo** utilizando o framework **Cypress**. Os testes abrangem cenários e funcionalidades essenciais para garantir a qualidade e estabilidade do sistema.

A aplicação Webdojo e os testes automatizados estão organizados no mesmo repositório, sendo possível executar ambos localmente.

---

## Estrutura de Pastas

A seguir, a estrutura principal das pastas e arquivos do projeto de testes:

```text
cypress/
├── e2e/
├── fixtures/
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
├── support/
│   ├── actions/
│   │   └── consultancy.actions.js
│   ├── commands.js
│   ├── e2e.js
│   └── util.js
```

- **e2e/**: Especificações dos testes end-to-end.
- **fixtures/**: Arquivos de dados e documentos utilizados nos testes (JSON/PDF).
- **support/**: Código de apoio (comandos customizados, ações reutilizáveis, utilitários).
    - **actions/**: Scripts de ações específicas usadas nos testes.

---

## Comandos de Execução

No arquivo `package.json`, os seguintes scripts estão disponíveis para executar os testes e a aplicação Webdojo:

```json
"scripts": {
    "dev": "serve -s dist -p 3000",
    "test": "npx cypress run --config viewportWidth=1440, viewportHeight=900",
    "test:ui": "npx cypress open",
    "test:login": "npx cypress"
}
```

- **`npm run dev`**: Executa a aplicação Webdojo localmente na porta 3000.
- **`npm run test`**: Executa todos os testes automatizados via Cypress em modo *headless*.
    - Viewport: 1440x900
- **`npm run test:ui`**: Abre a interface gráfica do Cypress para execução interativa dos testes.
- **`npm run test:login`**: Executa comandos Cypress (customizado para cenários de login).

---

## Pré-Requisitos

- Node.js instalado (preferencialmente versão LTS)
- Cypress instalado como dependência de desenvolvimento
- Instalar as dependências do projeto:
    ```bash
    npm install
    ```

---

## Como Executar os Testes

1. **Inicie a aplicação Webdojo localmente:**
    ```bash
    npm run dev
    ```
   Acesse `http://localhost:3000` para verificar se a aplicação está rodando.

2. **Execute os testes automatizados em modo headless:**
    ```bash
    npm run test
    ```

3. **Ou execute os testes pela interface gráfica do Cypress:**
    ```bash
    npm run test:ui
    ```

---

## Organização dos Testes

- Testes end-to-end organizados na pasta `e2e`
- Mock de dados via arquivos `.json` e `.pdf` em `fixtures`
- Comandos customizados e funções auxiliares em `support/actions` e `support/util.js`

---

## Boas Práticas

- Utilize os arquivos de suporte para reutilizar lógicas e comandos customizados.
- Centralize dados sensíveis e mockados nos arquivos `fixtures`.
- Separe ações (flows) complexos em scripts na pasta `actions`.

---

## Observações Finais

- Antes de rodar os testes, confirme que a aplicação está disponível localmente.
- Os testes podem ser expandidos conforme novas funcionalidades forem adicionadas à Webdojo.
- Para dúvidas sobre inclusão de novos cenários, consulte os exemplos em `e2e` e comandos customizados em `support`.

---

## Contribuição

Sinta-se livre para abrir issues ou pull requests com melhorias nos testes, novas funcionalidades ou sugestões de boas práticas. Toda contribuição é bem-vinda para tornar o projeto cada vez melhor!

---

**Autor:**
LourençoLabs / LourençoDev • 2025
