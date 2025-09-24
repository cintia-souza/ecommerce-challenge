# ⚔️ Crônicas da Távola - Front-end

Bem-vindo ao portal da sua próxima grande aventura! Este é o front-end da Crônicas da Távola, uma loja virtual de livros de fantasia inspirada nos grandes universos que amamos. Construído com Next.js, o projeto foi pensado para ser rápido, moderno e proporcionar uma experiência de navegação mágica.

## ✨ Funcionalidades

- **Design Responsivo:** A loja se adapta a qualquer dispositivo, desde o menor grimório (smartphone) até a maior távola (desktop).
- **Catálogo de Livros:** Explore uma vasta coleção de livros de fantasia.
- **Páginas de Produtos Dinâmicas:** Clique em um livro e mergulhe em seus detalhes, sinopses e preço.
- **Carrinho de Compras Interativo:** Adicione itens ao seu carrinho com um clique e visualize-os em uma barra lateral elegante.
- **Filtragem por Categoria:** Navegue por temas específicos (Sobrenatural, Medieval, etc.) e encontre a história que mais te agrada.
- **Páginas Institucionais:** Seções "Sobre Nós" e "Contato" com informações sobre a nossa missão e uma forma de enviar mensagens.
- **Página de Erro (404):** Mensagem amigável para quando o usuário se perder no mapa.

## 🚀 Tecnologias Utilizadas

- **Next.js 13+ (App Router):** Para renderização otimizada no servidor e no cliente.
- **React:** A biblioteca mágica por trás de toda a interface.
- **TypeScript:** Para garantir a segurança e a sanidade do nosso código.
- **Tailwind CSS:** Para estilizar os componentes com agilidade e precisão.
- **Lucide React:** Uma coleção de ícones para dar vida aos botões e elementos da interface.

## ⚙️ Como Começar

Siga estes passos para invocar o projeto em sua máquina local.

**Pré-requisitos:**

- Node.js (versão 18 ou superior)
- npm ou yarn

**Instruções:**

1.  Clone este repositório para o seu ambiente local:
    ```bash
    git clone [URL_DO_SEU_REPOSITÓRIO]
    cd [pasta_do_projeto]/frontend
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
4.  Abra seu navegador e navegue até `http://localhost:3000` para ver a loja em ação.

## 📁 Estrutura de Arquivos

- **`/app`:** Contém as páginas principais (rotas) do site.
- **`/components`:** Componentes reutilizáveis (Header, Footer, ProductCard, etc.).
- **`/context`:** Contextos React para gerenciar o estado global do carrinho.
- **`/lib`:** Funções utilitárias e de API para comunicação com o backend.
- **`/public`:** Arquivos estáticos como imagens e fontes.
- **`/types`:** Definições de tipos TypeScript para manter a consistência dos dados.