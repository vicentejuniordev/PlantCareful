import { TableNames } from "../../ETableNames.js";
import KnexInstace from "../../knex/index.js";

export const updateUser = async (userId: Number, updateData: any) : Promise<boolean | Error> =>{
    const field = Object.keys(updateData)[0] as string;
    try {
        const result = await KnexInstace(TableNames.user)
        .update({ [field]: updateData[field] })
        .where({ id: userId });
        
        if(result === 0){
            return new Error('Usuário não encontrado');
        }
        return true;
    } catch (error) {
        console.log(error);
        
        return new Error('Erro ao atualizar o usuário');
    }
}