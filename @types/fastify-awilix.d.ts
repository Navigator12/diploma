import { Knex } from 'knex';
import { BucketService, MonumentsService, PhotosService, PeopleService } from '../src/services';

declare module 'fastify-awilix' {
  interface Cradle {
    knex: Knex;
    bucketService: BucketService;
    monumentsService: MonumentsService;
    photosService: PhotosService;
    peopleService: PeopleService;
  }
}
