import { PhotosRepository } from '../repositories';
import { CreatePhotoPayload } from '../dto/photos';
import { getOne } from '../utils/knex';

export default class PhotosService {
  public constructor(private readonly photosRepository: PhotosRepository) {}

  public async createPhoto(payload: CreatePhotoPayload) {
    return this.photosRepository.createPhoto(payload).then(getOne);
  }
}
