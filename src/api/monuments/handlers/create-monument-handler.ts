import { FastifyRequest, FastifyReply } from 'fastify';

import { MonumentService } from '../../../services';
import { CreateMonument } from '../../../dto/monuments';

const createMonumentHandler = async (request: FastifyRequest<CreateMonument>, reply: FastifyReply) => {
  const monumentService = request.diScope.resolve<MonumentService>('monumentService');

  const monument = await monumentService.createMonument({
    name: request.body.name,
    latitude: request.body.latitude,
    longitude: request.body.longitude,
    photo_id: request.body.photo_id,
  });

  return reply.send(monument);
};

export default createMonumentHandler;
