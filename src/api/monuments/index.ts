import { FastifyInstance } from 'fastify';

import { getMonumentsHandler, getMonumentByIdHandler, createMonumentHandler } from './handlers';
import { getMonumentByIdSchema, createMonumentSchema } from './schemas';

const monuments = async (fastify: FastifyInstance) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: getMonumentsHandler,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: getMonumentByIdSchema,
    handler: getMonumentByIdHandler,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: createMonumentSchema,
    handler: createMonumentHandler,
  });
};

export default monuments;
