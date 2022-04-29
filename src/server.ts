import fastify from 'fastify';
import { fastifyAwilixPlugin, diContainer } from 'fastify-awilix';
import { asFunction, asClass } from 'awilix';
import multer from 'fastify-multer';

import { InitOptions } from './types';

import connectDatabase from './database';
import { BucketService, MonumentService, PhotoService } from './services';

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

  diContainer.register({
    bucketService: asClass(BucketService).singleton(),
  });

  diContainer.register({
    monumentService: asClass(MonumentService).singleton(),
  });

  diContainer.register({
    photoService: asClass(PhotoService).singleton(),
  });

  app.register(setApiRoutes);

  await app.ready();
  return app;
};

export const run = (app) => app.listen(app.environment.PORT);
