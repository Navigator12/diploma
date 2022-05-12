import { FastifyRequest, FastifyReply } from 'fastify';

import { GetMonuments } from '../../../dto/monuments';

const getMonumentsHandler = async (request: FastifyRequest<GetMonuments>, reply: FastifyReply) => {
  const { monumentsService } = request.diScope.cradle;

  const monuments = await monumentsService.getMonuments(request.query);

  return reply.send(monuments);
};

export default getMonumentsHandler;
