import fastify from 'fastify';
import { InitOptions } from './types';

export const init = async ({ config }: InitOptions) => {
  const app = fastify({
    logger: true,
  });

  app.decorate('config', config);

  await app.ready();
  return app;
};

export const run = (app) => app.listen(app.config.PORT);
