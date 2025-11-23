import { TableNames } from "../../ETableNames.js"
import KnexInstace from "../../knex/index.js"


export const listUsers = async() => {
    try {
        const data = await KnexInstace(TableNames.user).select('*');

        return data;
    } catch (error) {
        console.log(error);
        
        return new Error('Erro ao acessar o banco!!!')
    }
}