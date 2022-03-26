import type { EnvSchemaOpt } from 'env-schema';

const schema = {
  type: 'object',
  required: ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_DATABASE'],
  properties: {
    PORT: {
      type: 'number',
      default: 3000,
    },
    DB_HOST: {
      type: 'string',
    },
    DB_PORT: {
      type: 'string',
    },
    DB_USER: {
      type: 'string',
    },
    DB_PASSWORD: {
      type: 'string',
    },
    DB_DATABASE: {
      type: 'string',
    },
    GOOGLE_APPLICATION_CREDENTIALS: {
      type: 'string',
    },
  },
};

const environment: EnvSchemaOpt = {
  schema,
  dotenv: true,
};

export default environment;
