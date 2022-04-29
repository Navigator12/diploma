import { FastifyRequest, FastifyReply } from 'fastify';

import MonumentService from '../../../services/monuments';

const getMonumentsHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const monumentService = request.diScope.resolve<MonumentService>('monumentService');

  const monuments = await monumentService.getMonuments();

  return reply.send(monuments);
};

export default getMonumentsHandler;
