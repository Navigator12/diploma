import fastify from 'fastify';
import { fastifyAwilixPlugin, diContainer } from 'fastify-awilix';
import { asFunction, asClass } from 'awilix';

import { InitOptions } from './types';
import connectDatabase from './database';
import MonumentService from './services/monuments';
import setApiRoutes from './api';

export const init = async ({ environment }: InitOptions) => {
  const app = fastify({
    logger: true,
  });

  app.decorate('environment', environment);

  app.register(fastifyAwilixPlugin, {
    disposeOnClose: true,
    disposeOnResponse: true,
  });

  diContainer.register({
    knex: asFunction(connectDatabase).singleton(),
  });

  diContainer.register({
    monumentService: asClass(MonumentService).singleton(),
  });

  app.register(setApiRoutes);

  await app.ready();
  return app;
};

export const run = (app) => app.listen(app.environment.PORT);
