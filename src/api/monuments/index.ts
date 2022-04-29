import { FastifyInstance } from 'fastify';

import * as handlers from './handlers';
import * as schemas from './schemas';

const monuments = async (fastify: FastifyInstance) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: handlers.getMonumentsHandler,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: schemas.createMonumentSchema,
    handler: handlers.createMonumentHandler,
  });
};

export default monuments;
