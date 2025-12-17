import type { Knex } from "knex";
import { TableNames } from "../ETableNames.js";


export async function up(knex: Knex): Promise<void>{
    return knex
    .schema
    .createTable(TableNames.plant, table =>{
        table.bigIncrements('id').primary().index();
        table.string('name', 100).notNullable();
        table.string('species', 100).notNullable();
        table.integer('watering_frequency').notNullable();
        table.date('planted_at').notNullable();
        table.bigInteger('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable(TableNames.user).onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();

        table.comment('table plants');
    }).then(()=>{
        console.log(`created table ${TableNames.plant}`);
    });
};

export async function down(knex: Knex){
    return knex.schema.dropTable(TableNames.plant)
    .then(()=>{
        console.log(`droped table ${TableNames.plant}`);
    });
}