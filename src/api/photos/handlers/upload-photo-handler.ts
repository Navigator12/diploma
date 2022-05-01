import { FastifyReply, FastifyRequest } from 'fastify';
import createHttpError from 'http-errors';

import { UploadPhoto } from '../../../dto/photos';
import { DirectoryEnum } from '../../../services/types';

const uploadPhotoHandler = async (request: FastifyRequest<UploadPhoto>, reply: FastifyReply) => {
  if (!request.file) {
    throw new createHttpError.BadRequest('Need to provide file');
  }

  if (!request.body.type) {
    throw new createHttpError.BadRequest('Need to provide type');
  }

  const { bucketService, photosService } = request.diScope.cradle;

  const bucketData = await bucketService.uploadFile(request.file, DirectoryEnum[request.body.type]);

  const photo = await photosService.createPhoto(bucketData);

  reply.status(201).send(photo);
};

export default uploadPhotoHandler;
