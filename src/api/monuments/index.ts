import { FastifyInstance } from 'fastify';
import multer from 'fastify-multer';

import { getMonumentsHandler, createMonumentHandler, uploadMonumentPhotoHandler } from './handlers';
import { createMonumentSchema } from './schemas';

const monuments = async (fastify: FastifyInstance) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: getMonumentsHandler,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: createMonumentSchema,
    handler: createMonumentHandler,
  });

  fastify.route({
    method: 'POST',
    url: '/photo',
    preHandler: multer().single('file'),
    handler: uploadMonumentPhotoHandler,
  });
};

export default monuments;
