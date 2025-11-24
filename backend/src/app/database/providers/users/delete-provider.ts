import { TableNames } from "../../ETableNames.js";
import KnexInstace from "../../knex/index.js";


export const deleteUser = async(id: number): Promise<boolean | Error> => {
    try {
        const result = await KnexInstace(TableNames.user).where({id}).del();

        if(result > 0){
            return true;
        }

        return new Error('Usuário não encontrado');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao deletar usuário');
    }
}