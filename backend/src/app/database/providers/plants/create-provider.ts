import type { Plant } from "../../models/plants/Plants.js";
import KnexInstace from "../../knex/index.js";

export const createPlant = async (plant: Omit<Plant, 'id'>): Promise<Omit<Plant, 'id'> | Error> =>{
    try {
        const [result] = await KnexInstace('plants').insert(plant).returning('*');

        if(typeof result === 'object'){
            return result
        }
        return new Error('Erro ao cadastrar planta')
    } catch (error) {
        console.log(error)
        return new Error('Erro ao cadastrar planta ')
    }
}