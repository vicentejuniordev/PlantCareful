import type { Knex } from "knex";
import { TableNames } from "../ETableNames.js";


export async function up(knex:Knex): Promise<void> {
    return knex
    .schema
    .createTable(TableNames.user, table =>{
        table.bigIncrements('id').primary().index()
        table.string('username', 100).index().notNullable
        table.string('email', 200).notNullable().unique()
        table.string('city', 100).notNullable()
        table.string('state', 50).notNullable()
        table.string('password', 8).notNullable(),
        table.string('refresh_token', 255).nullable(),
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()


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