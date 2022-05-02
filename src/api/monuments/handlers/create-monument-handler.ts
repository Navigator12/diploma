import { FastifyRequest, FastifyReply } from 'fastify';

import { CreateMonument } from '../../../dto/monuments';

const createMonumentHandler = async (request: FastifyRequest<CreateMonument>, reply: FastifyReply) => {
  const { monumentsService } = request.diScope.cradle;

  const { person_ids, ...monumentPayload } = request.body;

  const monument = await monumentsService.createMonument({
    monumentPayload,
    person_ids,
  });

  return reply.send(monument);
};

export default createMonumentHandler;
