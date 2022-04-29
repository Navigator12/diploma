import { FastifyInstance } from 'fastify';
import monuments from './monuments';

const setApiRoutes = async (fastify: FastifyInstance) => {
  fastify.register(monuments, { prefix: '/v1/monuments' });
};

export default setApiRoutes;
