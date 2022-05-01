import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('monuments', (table) => {
    table.string('description');
  });

  await knex.schema.table('people', (table) => {
    table.string('description');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('monuments', (table) => {
    table.dropColumn('description');
  });

  await knex.schema.table('people', (table) => {
    table.dropColumn('description');
  });
}
