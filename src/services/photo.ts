import { diContainer } from 'fastify-awilix';
import { Knex } from 'knex';

import { CreatePhotoPayload } from '../dto/photos';
import { getOne } from '../utils/knex';

export default class PhotoService {
  private readonly knex: Knex;

  public constructor() {
    this.knex = diContainer.resolve<Knex>('knex');
  }

  public async createPhoto(payload: CreatePhotoPayload) {
    return this.knex('photos')
      .insert(
        {
          file_name: payload.fileName,
          original_name: payload.originalName,
        },
        '*'
      )
      .then(getOne);
  }
}
