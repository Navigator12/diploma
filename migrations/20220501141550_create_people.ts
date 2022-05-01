import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('people', (table) => {
    table.uuid('person_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.string('name').notNullable();
    table.uuid('photo_id').references('photo_id').inTable('photos').onUpdate('cascade').onDelete('set null');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('people');
}
