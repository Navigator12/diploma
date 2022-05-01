import { FastifyRequest, FastifyReply } from 'fastify';

import { CreateMonument } from '../../../dto/monuments';

const createMonumentHandler = async (request: FastifyRequest<CreateMonument>, reply: FastifyReply) => {
  const { monumentsService } = request.diScope.cradle;

  const monument = await monumentsService.createMonument({
    name: request.body.name,
    latitude: request.body.latitude,
    longitude: request.body.longitude,
    description: request.body.description,
    photo_id: request.body.photo_id,
  });

  return reply.send(monument);
};

export default createMonumentHandler;
