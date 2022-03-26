import { envSchema, EnvSchemaData } from 'env-schema';

import { init, run } from './server';
import environment from '../config/environment';

const bootstrap = async () => {
  const config: EnvSchemaData = envSchema(environment);

  try {
    const server = await init({ config });

    await run(server);
  } catch (e) {
    // TODO: log
  }
};

bootstrap();
