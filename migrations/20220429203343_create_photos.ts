import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('photos', (table) => {
    table.uuid('photo_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.string('file_name').notNullable();
    table.string('original_name').notNullable();
  });

  await knex.schema.table('monuments', (table) => {
    table.uuid('photo_id').references('photo_id').inTable('photos').onUpdate('cascade').onDelete('set null');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('monuments', (table) => {
    table.dropColumn('photo_id');
  });

  await knex.schema.dropTable('photos');
}
