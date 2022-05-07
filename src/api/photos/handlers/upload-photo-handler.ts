import { FastifyReply, FastifyRequest } from 'fastify';
import { BadRequest, UnprocessableEntity } from 'http-errors';

import { UploadPhoto } from '../../../dto/photos';
import { DirectoryEnum } from '../../../services/types';

const uploadPhotoHandler = async (request: FastifyRequest<UploadPhoto>, reply: FastifyReply) => {
  if (!request.file) {
    throw new BadRequest('Need to provide file');
  }

  if (!DirectoryEnum[request.body.type]) {
    throw new UnprocessableEntity('Need to provide valid type');
  }

  const { bucketService, photosService } = request.diScope.cradle;

  const bucketData = await bucketService.uploadFile(request.file, DirectoryEnum[request.body.type]);

  const photo = await photosService.createPhoto({ file_name: bucketData.fileName, original_name: bucketData.originalName });

  reply.status(201).send(photo);
};

export default uploadPhotoHandler;
