import { FastifyInstance } from 'fastify';
import multer from 'fastify-multer';

import { uploadPhotoHandler } from './handlers';

const photos = async (fastify: FastifyInstance) => {
  fastify.route({
    method: 'POST',
    url: '/',
    preHandler: multer().single('file'),
    handler: uploadPhotoHandler,
  });
};

export default photos;
