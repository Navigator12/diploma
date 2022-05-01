import { FastifyInstance } from 'fastify';
import monuments from './monuments';
import photos from './photos';
import people from './people';

const setApiRoutes = async (fastify: FastifyInstance) => {
  fastify.register(monuments, { prefix: '/v1/monuments' });
  fastify.register(photos, { prefix: '/v1/photos' });
  fastify.register(people, { prefix: '/v1/people' });
};

export default setApiRoutes;
