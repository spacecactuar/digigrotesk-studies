# super-guacamole

Repositório do projeto para a matéria Construção de Software

## Contexto

-

=========================

### Documentação

A equipe decidiu utilzar o Google Drive para armazenar a documentação, é possivel o controle de versões dos documentos escritos e a colaboração em equipe.

As documentações base deste projeto consistem em:

- [Documento de Requisitos](https://docs.google.com/document/d/1nW10u2yDiluhZo_GnVky8zfrkgEGlzbv9Vv8s9B-U1E/edit?usp=sharing)

O documento de Requisitos é um documento muito extenso que abrange diferentes tipos de documentação. Dentro do documento de requisitos temos:

- Regras de Negocio
- Listagem do Stakeholder
- Listagem dos Perfis de Usuários
- Diagrama de Caso de Uso
- Descrição dos Casos de Uso

### Frontend

A pasta **./app** é reponsável por armazenar o frontend. Onde as stacks escolhidas para comporem esse projeto são:

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
