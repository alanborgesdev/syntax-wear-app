# SyntaxWear

SyntaxWear é uma vitrine de e-commerce de calçados, criada como aplicação frontend. O projeto apresenta a marca, permite explorar produtos por categoria e visualizar detalhes dos itens, além de oferecer telas de cadastro e login.

> Os produtos são dados locais de demonstração. O carrinho fica salvo no `localStorage` do navegador. Não há backend para autenticação, cadastro de clientes ou finalização de pedidos. A consulta de CEP usa a API pública ViaCEP, e o valor de entrega é estimado por região.

## Funcionalidades

- Página inicial com destaque, categorias e galeria.
- Catálogo de produtos, páginas de categoria e detalhes de cada produto.
- Carrinho com inclusão, remoção e alteração de quantidade, persistido no navegador.
- Consulta de endereço e estimativa de frete por CEP.
- Páginas institucionais sobre a marca e suas lojas.
- Telas de login e cadastro, com validação de campos no formulário de cadastro.

## Tecnologias

- React 19 e TypeScript
- Vite 8
- TanStack Router, com rotas organizadas por arquivos
- Tailwind CSS 4
- React Hook Form e Zod para formulários e validação

## Requisitos

- Node.js em uma versão compatível com Vite 8
- npm

## Como executar

1. Clone o repositório e acesse a pasta do projeto.
2. Instale as dependências:

   ```bash
   npm ci
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço informado pelo Vite no terminal (normalmente `http://localhost:5173`).

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento com atualização automática. |
| `npm run build` | Verifica os tipos TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente a versão de produção já compilada. Execute `npm run build` antes. |
| `npm run lint` | Executa o ESLint no projeto. |

## Rotas principais

| Caminho | Página |
| --- | --- |
| `/` | Página inicial |
| `/products` | Catálogo |
| `/products/category/:category` | Produtos de uma categoria |
| `/products/:productId` | Detalhes do produto |
| `/about` | Sobre a marca |
| `/our-stores` | Lojas |
| `/sign-in` | Login |
| `/sign-up` | Cadastro |

## Estrutura do projeto

```text
src/
├── components/   # Componentes da interface, como cabeçalho, produtos e formulários
├── contexts/     # Contexto e estado do carrinho
├── interfaces/   # Tipos e interfaces TypeScript
├── mocks/        # Dados locais de produtos e categorias
├── pages/        # Páginas e rotas da aplicação
├── styles/       # Estilos globais
└── utils/        # Funções utilitárias
```
