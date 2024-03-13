import sql from './db.js'

async function getClientes(){
    const clientes = await sql`
    select * from Clientes

    `
    console.log(clientes);
    return clientes

}

getClientes()