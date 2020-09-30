<!--
*** Você olhou o README, parabéns
*** Nesse markdown vou referenciar os links para facilitar legilibilidade
-->

<!-- PROJECTS SHIELDS -->
![Contributors][contributors-badge]
![License][license]
![Languages][languages]
![Top-language][top-language]

<!-- Content Table-->
## Tabela de Conteúdo

- [Sobre o Projeto](#sobre-o-projeto)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Começar](#como-começar)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Documentação](#documentação)
  - [Frontend](#frontend)
  - [Backend](#backend)

<!-- About the Project-->
## Sobre o Projeto

Repositório do projeto para a matéria Construção de Software.
[INSERT NAME] é um software para gestão da vida acadêmica de discentes. Os discentes tem controle de seus períodos, disciplinas, tarefas, aulas, provas e afins de forma simples e visual, otimizando e facilitando seu dia a dia.

### Tecnologias Utilizadas

Esse projeto é composto majoritariamente de Javascript e por isso se utiliza dos seguintes Frameworks.

- [Express](https://expressjs.com)
- [Angular](https://angular.io)


<!-- Getting Started -->
## Como Começar

Para começar é só estar com o **Node.js e NPM** instalados na sua máquina. E caso tenha alguma dúvida pode seguir as instruções a baixo.

### Pré-requisitos

Para verificar a instalação do Node.

```bash
node -v
```

Para verificar a instalação do NPM.

```sh
npm -v
```

### Instalação
1. Clone o repositório para a sua máquina
```sh
git clone https://github.com/spacecactuar/super-guacamole.git
```
2. Instale os pacotes NPM
```sh
npm install
```
3. Rode o programa
```sh
npm start
```

---

<!-- Documentation  -->

## Documentação

A equipe decidiu utilzar o Google Drive para armazenar a documentação, é possivel o controle de versões dos documentos escritos e a colaboração em equipe.

As documentações base deste projeto consistem em:

- [Documento de Requisitos](https://docs.google.com/document/d/1nW10u2yDiluhZo_GnVky8zfrkgEGlzbv9Vv8s9B-U1E/edit?usp=sharing)

- [Diagrama de Caso de uso](https://drive.google.com/file/d/1_J1_o2Cn_jvaA8xDJmoSDzqNWpNrp2QW/view?usp=sharing)

O documento de Requisitos é um documento muito extenso que abrange diferentes tipos de documentação. Dentro do documento de requisitos temos:

- Regras de Negocio
- Listagem do Stakeholder
- Listagem dos Perfis de Usuários
- Diagrama de Caso de Uso
- Descrição dos Casos de Uso

### Frontend

A pasta **./public** é reponsável por armazenar o frontend. Onde as stacks escolhidas para comporem esse projeto são:

- Angular: será o framework que vamos utilizar para criar nossos controllers e fazer o gerenciamento de informação e uso da API Rest para comunicação com o backend;
- HTML: os arquivos responsáveis pela view vão ser escritos diretamente em HTML;
- CSS: vamos utilizar arquivos CSS padrão para complementar qualquer customização de estilo que seja necessário incorporar em cima do Bootstrap4;
- Bootstrap4: framework de css que iremos utilizar para formar nossa identidade visual.

### Backend

A pasta **./app** é reponsável por armazenar o frontend. Onde as stacks escolhidas para comporem esse projeto são:

- NodeJs: como uma ideia de facilitar a curva de aprendizado da equipe e experiência já obtida foi escolhido o NodeJs para ser a base do backend. Onde teremos um produto de software com javascript de ponta a ponta;
- MongoDb: para este produto de software a arquitetura de um banco NoSql é suficiente para atender à demanda. Onde a segurança e integridade vais er totalmente configurada pela estrutura do framework escolhido para conectar o código ao banco de dados;
- Mongoose: framework utilizado para conectar o backend ao banco de dados. Onde os arquivos do model serão definidas as estritutas dos objetos das tabelas e os seus indexs, para assim manter a integridade;
- Express: framework escolhido para construir as rotas para a API Rest. Essa vai ser a estrutura que o backend vai disponibilizar os serviços que o frontend vai consumir.

<!-- LINKS DE MARKDOWN E IMAGENS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-badge]: https://img.shields.io/github/contributors/spacecactuar/super-guacamole?style=flat-square
[license]: https://img.shields.io/github/license/spacecactuar/super-guacamole?style=flat-square
[languages]: https://img.shields.io/github/languages/count/spacecactuar/super-guacamole?style=flat-square
[top-language]: https://img.shields.io/github/languages/top/spacecactuar/super-guacamole?style=flat-square
