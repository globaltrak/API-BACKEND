import sql from './db.js'

export class DatabasePostgres{

    async list() {
        try {
            const clientes = await sql`select * from clientes`;
            
            return Array.from(clientes);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
            throw error; // rejeitar a Promise com o erro para que seja tratado no código cliente
        }
    }

    async create(cliente){
        const { nome, email, senha } = cliente
        await sql`
        insert into clientes(nome, email, senha)
        VALUES(${nome}, ${email}, ${senha})
        `
       
    }
    

}