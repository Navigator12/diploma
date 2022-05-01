import fastify, { FastifyInstance } from 'fastify';
import { fastifyAwilixPlugin, diContainer } from 'fastify-awilix';
import { asFunction, InjectionMode, Lifetime } from 'awilix';
import multer from 'fastify-multer';

import { InitOptions } from './types';

import connectDatabase from './database';

import setApiRoutes from './api';

export const init = async ({ environment }: InitOptions) => {
  const app = fastify({
    logger: true,
  });

  app.decorate('environment', environment);

  app.register(multer.contentParser);

  app.register(fastifyAwilixPlugin, {
    disposeOnClose: true,
    disposeOnResponse: true,
  });

  diContainer.register({
    knex: asFunction(connectDatabase).singleton(),
  });

  diContainer.loadModules(['src/services/*.service.ts'], {
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
      injectionMode: InjectionMode.CLASSIC,
    },
    formatName: 'camelCase',
  });

  app.register(setApiRoutes);

  await app.ready();
  return app;
};

export const run = (app: FastifyInstance) => app.listen(app.environment.PORT);
