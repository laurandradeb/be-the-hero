const express = require('express'); //Importando todos as funcionalidades do express para um variável
const  cors = require('cors');
const routes = require('./routes'); //Importando as rotas do arquivo

const app = express(); //Criando a minha aplicação 

app.use(cors());
app.use(express.json());
app.use(routes);    //Tem que ser nessa posição

app.listen(3333); //Falando para a minha aplicação ouvir a porta 3333

//Para executar a aplicação = node index.js

/*
* Rota / Recurso
*/

/* 
* Métodos HTTP:
* 
* GET: Buscar/Lisrar uma informção do back-end
* POST: Criar uam informação no back-end
* PUT: Alterar uma informação mo back-end
* DELETE: Deletar uma informação no back-end
*/

/* 
* Tipos de parâmetros:
* 
* Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
* Route Params: parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
* DELETE: Deletar uma informação no back-end
*/

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*/


