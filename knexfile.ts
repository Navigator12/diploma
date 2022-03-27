import * as path from 'path';
import { Knex } from 'knex';

import environment from './config/environment';

const databaseConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: environment.DB_HOST,
    port: environment.DB_PORT,
    database: environment.DB_DATABASE,
    user: environment.DB_USER,
    password: environment.DB_PASSWORD,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve(__dirname, './migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, './seeds'),
  },
  pool: {
    min: 2,
    max: 10,
  },
};

export default databaseConfig;
