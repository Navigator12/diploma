import { FastifyInstance } from 'fastify';

import { getPeopleHandler, createPersonHandler } from './handlers';
import { createPersonSchema } from './schemas';

const people = async (fastify: FastifyInstance) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: getPeopleHandler,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: createPersonSchema,
    handler: createPersonHandler,
  });
};

export default people;
