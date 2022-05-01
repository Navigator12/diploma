import { Knex } from 'knex';

import { CreatePhotoPayload } from '../dto/photos';
import { InjectService } from '../utils/di';
import { getOne } from '../utils/knex';

export default class PhotosService {
  @InjectService('knex') private readonly knex: Knex;

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
