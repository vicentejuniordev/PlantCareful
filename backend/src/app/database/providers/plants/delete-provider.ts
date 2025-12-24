import KnexInstace from "../../knex/index.js";
import { TableNames } from "../../ETableNames.js";


const deletePlant = async (plantId : Number) =>{
    try{
        KnexInstace(TableNames.plant)
        .where('id', plantId)
        .del();
        return true;
    }catch(error){
        console.log(error);
        return new Error('Erro ao acessar o banco!!!');
    }
}

export default deletePlant;