import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('monuments', (table) => {
    table
      .enu('type', ['museum', 'church', 'house'], { useNative: true, enumName: 'monument_type' })
      .notNullable()
      .defaultTo('museum');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('monuments', (table) => {
    table.dropColumn('type');
  });

  await knex.raw('drop type if exists monument_type');
}
