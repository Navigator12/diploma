import fastify from 'fastify';

import { InitOptions } from './types';

export const init = async ({ environment }: InitOptions) => {
  const app = fastify({
    logger: true,
  });

  app.decorate('environment', environment);

  await app.ready();
  return app;
};

export const run = (app) => app.listen(app.environment.PORT);
