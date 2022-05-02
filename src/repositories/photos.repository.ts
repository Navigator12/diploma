import { Knex } from 'knex';

import { CreatePhotoData } from '../dto/photos';

export default class PhotosRepository {
  public constructor(private readonly knex: Knex) {}

  public createPhoto(data: CreatePhotoData) {
    return this.knex('photos').insert(data, '*');
  }
}
