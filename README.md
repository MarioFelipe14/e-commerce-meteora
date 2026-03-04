
![](https://img.shields.io/github/license/alura-cursos/android-com-kotlin-personalizando-ui)

# Meteora

Uma aplicação que simula um e-commerce de produtos, onde contem a página inicial que lista todos os produtos e a página de detalhes de cada produto.

## 🔨 Funcionalidades do projeto

O aplicativo consiste em duas páginas principais: a primeira lista produtos e categorias, enquanto a segunda exibe detalhes específicos de cada produto. Esta última era uma página gerada no lado do servidor, utilizando rotas dinâmicas. Os produtos foram simulados de maneira básica. Contudo, implementei estratégias para gerar páginas estáticas, consumindo API externa.

## ✔️ Técnicas e tecnologias utilizadas

As principais técnicas e tecnologias abordadas são:

- `Next.js`: Framework para React com recursos de SSG.
- `Fetch API`: Realizar requisições HTTP para buscar dados.
- `React Components`: Componentes reutilizáveis.
- `Web server`: Como hospedar o site.

## 🎯 Desafios do projeto

- O principal desafio foi converter as rotas dinâmicas da página de detalhes do produto em páginas estáticas exportadas.

## 🛠️ Abrir e rodar o projeto

Após baixar o projeto, você pode abrir com seu editor de código preferido. Siga estes passos:

- Abra o terminal no diretório do projeto.
- Execute `yarn` para instalar as dependências.
- Inicie o servidor de desenvolvimento com `yarn dev`.
- Acesse `http://localhost:3000` no navegador para ver o projeto.

