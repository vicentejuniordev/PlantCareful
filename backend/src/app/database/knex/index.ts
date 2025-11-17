import knex from "knex"
import { development, production, test } from "./Enviroment.js"


const getEnviroment = () =>{
    switch(process.env.NODE_ENV){
        case 'production' : return production
        case 'test': return test
        default : return development
    }
}

const KnexInstace = knex(getEnviroment())

export default KnexInstace