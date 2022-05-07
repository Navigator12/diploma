import { FastifyRequest, FastifyReply } from 'fastify';
import { NotFound } from 'http-errors';

import { GetMonumentById } from '../../../dto/monuments';

const getMonumentByIdHandler = async (request: FastifyRequest<GetMonumentById>, reply: FastifyReply) => {
  const { monumentsService } = request.diScope.cradle;

  const { id } = request.params;

  const monument = await monumentsService.getMonumentById(id);

  if (!monument) {
    throw new NotFound('Monument cannot be found');
  }

  return reply.send(monument);
};

export default getMonumentByIdHandler;
