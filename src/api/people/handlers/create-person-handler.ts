import { FastifyRequest, FastifyReply } from 'fastify';

import { CreatePerson } from '../../../dto/people';

const createPersonHandler = async (request: FastifyRequest<CreatePerson>, reply: FastifyReply) => {
  const { peopleService } = request.diScope.cradle;

  const person = await peopleService.createPerson({
    name: request.body.name,
    description: request.body.description,
    photo_id: request.body.photo_id,
  });

  return reply.send(person);
};

export default createPersonHandler;
