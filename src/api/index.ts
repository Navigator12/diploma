import { FastifyInstance } from 'fastify';
import monuments from './monuments';
import photos from './photos';

const setApiRoutes = async (fastify: FastifyInstance) => {
  fastify.register(monuments, { prefix: '/v1/monuments' });
  fastify.register(photos, { prefix: '/v1/photos' });
};

export default setApiRoutes;
