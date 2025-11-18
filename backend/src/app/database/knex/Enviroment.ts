import type { Knex } from "knex";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const development : Knex.Config = {
    client : 'sqlite3',
    useNullAsDefault : true,
    connection : {
        filename : path.resolve(__dirname,'..','..','..','..', 'db.sqlite')
    },
    migrations:{
        directory : path.resolve(__dirname, '..', 'migrations')
    },
    seeds :{
        directory : path.resolve(__dirname, '..', 'seeds')
    },
    pool : {
        afterCreate: (connection : any, done : Function) =>{
            connection.run('PRAGMA foreign_keys=ON'),
            done();
        }
    }
}

export const test: Knex.Config = {
    ...development, connection: ':memory:'
}

export const production : Knex.Config = {
    ...development
}

export default {
    development,
    test,
    production
}