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
  - [Telas da Aplicação](#telas-da-aplicação)
- [Como Começar](#como-começar)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação e execução](#instalação-e-execução)
  - [Atualizando o Banco de Dados](#atualizando-o-banco-de-dados)
  - [Arquitetura](#arquitetura)
- [Documentação](#documentação)
  - [Frontend](#frontend)
  - [Backend](#backend)

<!-- About the Project-->
## Sobre o Projeto

Repositório do projeto para a matéria Construção de Software.
**Digi Grotesk studies** é um software para gestão da vida acadêmica de discentes. Os discentes tem controle de seus períodos, disciplinas, tarefas, aulas, provas e afins de forma simples e visual, otimizando e facilitando seu dia a dia.<br>
Por questões de  tempo para entrega do projeto o sistema virou uma API que entrega todos os requisitos salvando as informações academicas do usuário no banco de dados.

### Tecnologias Utilizadas

Esse projeto é composto majoritariamente de Javascript e por isso se utiliza dos seguintes Frameworks.

- [Bootstrap4 v4.5.3](https://getbootstrap.com/)
- [Angular v7.1.4](https://angular.io)
- [Express v4.17.1](https://expressjs.com)
- [Mongoose v5.11.2](https://mongoosejs.com/)

### Telas da Aplicação
O layout da aplicação foi desenhado no Figma e está disponível [aqui](https://www.figma.com/proto/9Lx0Og1sdE6bFXRwFtKl8y/Digi-Grotesk?node-id=15%3A31&viewport=424%2C-1019%2C0.5&scaling=min-zoom).

<!-- Getting Started -->
## Como Começar

Para começar é necessário estar com as tecnologias abaixo **Node.js, NPM e MongoDB** instalados na sua máquina, caso tenha alguma dúvida siga o guia de instalação de cada uma delas.

- [Node.js v14.15.1](https://nodejs.org/en/)
- [NPM v6.14.8](https://www.npmjs.com/) (Incluso no Node.js)
- [MongoDB v4.2](https://www.mongodb.com/)

### Pré-requisitos
```
Para verificar a instalação do Node, NPM e MongoDB.
node -v
npm -v
mongod --version
```

### Instalação e execução
```sh
1. Clone o repositório para a sua máquina
git clone https://github.com/spacecactuar/super-guacamole.git

2. Instale os pacotes NPM
npm install

3. Rodar o projeto
npm start
    3.1 Para rodar em modo desenvolvedor
        npm nodemon

4. Rodar o projeto de testes
npm test
    
```

#### Banco de dados
A tecnologia de banco de dados escolhida para esse projeto foi um NoSQL, no caso o MongoDB. Onde o projeto roda com o banco em nuvem, que esta alocado no serviço Atlas: MongoDB.
Com o framework mongoose a estrutura do banco de dados é criada de forma dinamica, ou seja, quando uma operação de create() é chamada ele cria a tabela e ja insere o documento, portanto no projeto basta adicionar a url de conexão com o banco de dados.

### Arquitetura
- [Diagrama de Arquitetura](https://drive.google.com/file/d/1D3ytcmxb1eZ3RUNFNHrX8GmTNPnHovXS/view?usp=sharing)

### API

O projeto atende por meio de API todos os requisitos listados na documentação, portanto para auxilio do uso documentamos a API tilizando o Swagger.<br>
Para ter acesso a documentação, primeiro rode o sistema, e depois basta acessar a seguinte url:<br>
http://localhost:3000/documentation

---

<!-- Documentation  -->

## Documentação

A equipe decidiu utilzar o Google Drive para armazenar a documentação, é possivel o controle de versões dos documentos escritos e a colaboração em equipe.

As documentações base deste projeto consistem em:

- [Documento de Requisitos](https://docs.google.com/document/d/1nW10u2yDiluhZo_GnVky8zfrkgEGlzbv9Vv8s9B-U1E/edit?usp=sharing)

- [Diagrama de Caso de uso](https://drive.google.com/file/d/1_J1_o2Cn_jvaA8xDJmoSDzqNWpNrp2QW/view?usp=sharing)

- [Diagrama de Classe](https://drive.google.com/file/d/14fJPVrA4tYfEQRtrdnIvbPrMt-U4ZL7U/view?usp=sharing)

O documento de Requisitos é um documento muito extenso que abrange diferentes tipos de documentação. Dentro do documento de requisitos temos:

- Descrição da aplicação
- Listagem do Stakeholder
- Listagem dos Perfis de Usuários
- Diagrama de Classe
- Diagrama de Caso de Uso
- Descrição dos Casos de Uso
- Diagrama de Arquitetura

### Frontend

###### Como citado mais acima a parte frontend do projeto foi abandonado, porem deixaremos aqui documentado quais eram as stacks escolhidas pela equipe
A pasta **./public** é reponsável por armazenar o frontend. Onde as stacks escolhidas para comporem esse projeto são:

- Angular (v7.1.4): será o framework que vamos utilizar para criar nossos controllers e fazer o gerenciamento de informação e uso da API Rest para comunicação com o backend;
- HTML: os arquivos responsáveis pela view vão ser escritos diretamente em HTML;
- CSS3: vamos utilizar arquivos CSS padrão para complementar qualquer customização de estilo que seja necessário incorporar em cima do Bootstrap4;
- Bootstrap4: framework de css que iremos utilizar para formar nossa identidade visual.

### Backend

A pasta **./app** é reponsável por armazenar o frontend. Onde as stacks escolhidas para comporem esse projeto são:

- NodeJs (v14.15.1): como uma ideia de facilitar a curva de aprendizado da equipe e experiência já obtida foi escolhido o NodeJs para ser a base do backend. Onde teremos um produto de software com javascript de ponta a ponta;
- MongoDb (v4.2): para este produto de software a arquitetura de um banco NoSql é suficiente para atender à demanda. Onde a segurança e integridade vais er totalmente configurada pela estrutura do framework escolhido para conectar o código ao banco de dados;
- Mongoose (v5.11.2): framework utilizado para conectar o backend ao banco de dados. Onde os arquivos do model serão definidas as estritutas dos objetos das tabelas e os seus indexs, para assim manter a integridade;
- Express (v4.17.1): framework escolhido para construir as rotas para a API Rest. Essa vai ser a estrutura que o backend vai disponibilizar os serviços que o frontend vai consumir.
- Nodemon (v2.0.6): é usado para facilitar o ambiente do desenvolvedor. Sempre que um arquivo é modificado o nodemon restarta o servidor automaticamente;
- Mocha (v8.2.1): framework utilizado para os testes automatizados do sistema.

## Equipe Digi Grotesk
Todos os artefatos desse projeto foram produzidos pela equipe digigrotesk, que é composta por:

- Ariel Marte - 201900264
- Julien David - 201508736
- Marco Feitosa - 201905542
- Pedro Henrique C. e Silva - 201602512



<!-- LINKS DE MARKDOWN E IMAGENS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-badge]: https://img.shields.io/github/contributors/spacecactuar/super-guacamole?style=flat-square
[license]: https://img.shields.io/github/license/spacecactuar/super-guacamole?style=flat-square
[languages]: https://img.shields.io/github/languages/count/spacecactuar/super-guacamole?style=flat-square
[top-language]: https://img.shields.io/github/languages/top/spacecactuar/super-guacamole?style=flat-square
