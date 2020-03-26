const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Estou desacoplando o modo de rotas do express em uma nova variável
const routes = express.Router();

routes.post('/sessions', SessionController.create);

//para listar as ongs
routes.get('/ongs', OngController.index);
//Para criar uma ong
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

 //Para exportar essas rotas (Assim que faz para exportar uma variáve de dentro de um arquivo)
 module.exports = routes;