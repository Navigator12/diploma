import { envSchema } from 'env-schema';
import type { EnvSchemaOpt } from 'env-schema';

import { IEnvironment } from './types';

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
      type: 'number',
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
    CLOUD_STORAGE_BUCKET_NAME: {
      type: 'string',
    },
    GOOGLE_APPLICATION_CREDENTIALS: {
      type: 'string',
    },
  },
};

const options: EnvSchemaOpt = {
  schema,
  dotenv: true,
};

const environment: IEnvironment = envSchema<IEnvironment>(options);

export default environment;
