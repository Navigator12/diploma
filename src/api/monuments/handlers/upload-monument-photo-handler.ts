import { FastifyReply, FastifyRequest } from 'fastify';
import createHttpError from 'http-errors';

import { BucketService, PhotoService } from '../../../services';
import { DirectoryEnum } from '../../../services/types';

const uploadMonumentPhotoHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  if (!request.file) {
    throw new createHttpError.BadRequest('Need to provide file');
  }

  const bucketService = request.diScope.resolve<BucketService>('bucketService');
  const photoService = request.diScope.resolve<PhotoService>('photoService');

  const bucketData = await bucketService.uploadFile(request.file, DirectoryEnum.monumentPhotos);

  const photo = await photoService.createPhoto(bucketData);

  reply.status(201).send(photo);
};

export default uploadMonumentPhotoHandler;
