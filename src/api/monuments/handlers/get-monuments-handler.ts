import { FastifyRequest, FastifyReply } from 'fastify';

import { MonumentsService } from '../../../services';

const getMonumentsHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const monumentsService = request.diScope.resolve<MonumentsService>('monumentsService');

  const monuments = await monumentsService.getMonuments();

  return reply.send(monuments);
};

export default getMonumentsHandler;
