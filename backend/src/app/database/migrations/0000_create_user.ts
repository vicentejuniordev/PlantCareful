import type { Knex } from "knex";
import { TableNames } from "../TableNames.js";


export async function up(knex:Knex): Promise<void> {
    return knex
    .schema
    .createTable(TableNames.user, table =>{
        table.bigIncrements('id').primary().index()
        table.string('username', 100).index().notNullable
        table.string('email', 200).notNullable
        table.string('cidade', 100).notNullable
        table.string('state', 50).notNullable
        table.string('password', 8).notNullable

        table.comment('table users')
    }).then(()=>{
        console.log(`created table ${TableNames.user}`)
    })
}

export async function down(knex:Knex) {
    return knex.schema.dropTable(TableNames.user)
    .then(()=>{
        console.log(`droped table ${TableNames.user}`)
    })
}