const Knex = require('knex');

//Importe das conficurções do nosso banco de dados
const configuration = require('../../knexfile');

//Criar a conexão(passando como parametro a conexão de desenvolvimento)
const connection = Knex(configuration.development);

//Exporta de dentro do arquivo nossa conexão com o banco de dados
module.exports = connection;