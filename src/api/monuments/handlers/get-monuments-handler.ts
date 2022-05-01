import { FastifyRequest, FastifyReply } from 'fastify';

const getMonumentsHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const { monumentsService } = request.diScope.cradle;

  const monuments = await monumentsService.getMonuments();

  return reply.send(monuments);
};

export default getMonumentsHandler;
