import { FastifyRequest, FastifyReply } from 'fastify';

const getPeopleHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  const { peopleService } = request.diScope.cradle;

  const people = await peopleService.getPeople();

  return reply.send(people);
};

export default getPeopleHandler;
