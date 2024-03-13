import restify  from 'restify'
import bcrypt from 'bcrypt'
import { DatabasePostgres } from './DatabasePostgres.js';



var server = restify.createServer()
const database = new DatabasePostgres()


server.get('/clientes', async (request, response) =>{
    console.log(request);
    const clientes = await database.list()
    response.send(clientes)

});

server.post('/clientes', async(request, response) =>{
    const body = await request.body
    console.log(body);
    
})
// server.post('/clientes', async (request, reply) =>{
//     const { nome, email, senha } = request.body
//     await database.create({
//         nome,
//         email,
//         senha
//     })

//     return reply.status(201).send()
   

// })



server.listen(3333, function(){
    console.log('%s listen at %s', server.name, server.url);
})

