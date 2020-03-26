
const crypto = require('crypto');
const connection = require('../database/connection');

//Exporta os métodos criados
module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },


    async create(request, response) {
        //const params = request.query;
        //const params = request.params;
        //const params = request.body;
    
        const { name, email, whatsapp, city, uf } = request.body;
        
        const id = crypto.randomBytes(4).toString('HEX');
    
        //Quando o node chegar nesse codigo ele vai aguardar o codigo de baixo finalizar para então ele continuar
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
         //return response.send('Hello World!');
        return response.json({ id });
     
    }
};