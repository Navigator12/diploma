import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('monuments_on_people', (table) => {
    table
      .uuid('monument_id')
      .notNullable()
      .references('monument_id')
      .inTable('monuments')
      .onUpdate('cascade')
      .onDelete('cascade');

    table.uuid('person_id').notNullable().references('person_id').inTable('people').onUpdate('cascade').onDelete('cascade');

    table.primary(['monument_id', 'person_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('monuments_on_people');
}
