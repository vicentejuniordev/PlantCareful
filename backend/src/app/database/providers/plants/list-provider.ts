import { TableNames } from "../../ETableNames.js";
import KnexInstace from "../../knex/index.js";

const listPlantsProvider = async (userId : number) =>{
    try{
        const data = await KnexInstace(TableNames.plant)
        .select('*')
        .where('user_id', userId);

        if(!data.length){
            return [];
        }
        
        return data;
    }catch(error){
        console.log(error);
        return new Error('Erro ao acessar o banco!!!');
    }

};

export default listPlantsProvider;