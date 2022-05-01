import { FastifyReply, FastifyRequest } from 'fastify';
import createHttpError from 'http-errors';

import { BucketService, PhotosService } from '../../../services';
import { DirectoryEnum } from '../../../services/types';

const uploadMonumentPhotoHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  if (!request.file) {
    throw new createHttpError.BadRequest('Need to provide file');
  }

  const bucketService = request.diScope.resolve<BucketService>('bucketService');
  const photosService = request.diScope.resolve<PhotosService>('photosService');

  const bucketData = await bucketService.uploadFile(request.file, DirectoryEnum.monumentPhotos);

  const photo = await photosService.createPhoto(bucketData);

  reply.status(201).send(photo);
};

export default uploadMonumentPhotoHandler;
