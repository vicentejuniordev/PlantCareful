import { TableNames } from "../../ETableNames.js"
import KnexInstace from "../../knex/index.js"


const upddatePlantProvider = async (plantid: Number, updatedData: any): Promise<boolean | Error> =>{
    const field = Object.keys(updatedData)[0] as string

    try {
        const result = await KnexInstace(TableNames.plant)
        .update({[field]: updatedData[field]})
        .where({id: plantid})

        if(result === 0){
            return new Error('Erro ao atualizar planta...')
        }

        return true
    } catch (error) {
        console.log(error)

        return new Error("Erro ao acessar o banco...")
    }
}

export default upddatePlantProvider