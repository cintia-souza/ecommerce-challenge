# 🐉 Crônicas da Távola - Back-end

Este é o back-end que alimenta a jornada do nosso front-end. Ele foi construído para fornecer uma API simples e direta, gerenciando os dados dos livros e a lógica do carrinho de compras.

## ✨ Tecnologias Utilizadas

- **Node.js:** O ambiente de execução do JavaScript.
- **Express.js:** O framework robusto e minimalista para construir a API.
- **TypeScript:** Para adicionar tipagem estática e tornar o código mais seguro.
- **Nodemon:** Para reiniciar o servidor automaticamente durante o desenvolvimento.

## ⚙️ Como Começar

Siga estes passos para levantar o servidor e dar vida à sua API.

**Pré-requisitos:**

- Node.js (versão 18 ou superior)
- npm ou yarn

**Instruções:**

1.  Navegue até a pasta do back-end:
    ```bash
    cd [pasta_do_projeto]/backend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
4.  O servidor estará rodando em `http://localhost:5000`.

## 🗺️ Endpoints da API

A API foi projetada para ser consumida pelo front-end da nossa loja. Abaixo estão os endpoints disponíveis:

### Produtos

-   **`GET /api/products/:id`**
    -   **Descrição:** Retorna os detalhes de um livro específico.
    -   **Exemplo:** `/api/products/o-despertar-da-lua-caida`

### Carrinho de Compras

-   **`GET /api/cart`**
    -   **Descrição:** Retorna o resumo completo do carrinho de compras (itens e subtotal).
-   **`POST /api/cart`**
    -   **Descrição:** Adiciona um novo livro ao carrinho.
    -   **Corpo da Requisição (JSON):**
        ```json
        {
          "productId": "id-do-produto",
          "quantity": 1
        }
        ```