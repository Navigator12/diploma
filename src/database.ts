import knex from 'knex';

import knexConfig from '../knexfile';

const connectDatabase = () => knex(knexConfig);

export default connectDatabase;
