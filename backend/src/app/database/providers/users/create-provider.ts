import { TableNames } from "../../ETableNames.js";
import KnexInstace from "../../knex/index.js";
import type { User } from "../../models/users/User.js";


export const create = async (user: Omit<User, 'id'>): Promise<Omit<User, 'id'> | Error> =>{
    try {
        const [result] = await KnexInstace(TableNames.user).insert(user).returning('*');

        if(typeof result === 'object'){
            return result
        }
        return new Error('Erro ao cadastrar usuário')
    } catch (error) {
        console.log(error)
        return new Error('Erro ao cadastrar usuário ')
    }
}