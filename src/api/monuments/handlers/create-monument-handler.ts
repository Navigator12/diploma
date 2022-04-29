import { FastifyRequest, FastifyReply } from 'fastify';

import MonumentService from '../../../services/monuments';
import { CreateMonument } from '../../../dto/monuments';

const createMonumentHandler = async (request: FastifyRequest<CreateMonument>, reply: FastifyReply) => {
  const monumentService = request.diScope.resolve<MonumentService>('monumentService');

  const monument = await monumentService.createMonument({
    name: request.body.name,
    latitude: request.body.latitude,
    longitude: request.body.longitude,
  });

  return reply.send(monument);
};

export default createMonumentHandler;
