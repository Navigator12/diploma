import { FastifyInstance } from 'fastify';

import { getMonumentsHandler, createMonumentHandler } from './handlers';
import { createMonumentSchema } from './schemas';

const monuments = async (fastify: FastifyInstance) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: getMonumentsHandler,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: createMonumentSchema,
    handler: createMonumentHandler,
  });
};

export default monuments;
