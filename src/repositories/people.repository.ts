import { Knex } from 'knex';

import { CreatePersonData } from '../dto/people';

export default class PeopleRepository {
  public constructor(private readonly knex: Knex) {}

  public createPerson(data: CreatePersonData) {
    return this.knex('people').insert(data, '*');
  }

  public getPeopleWithPhotoByMonumentId(id: string) {
    return this.knex('monuments_on_people')
      .select('people.person_id', 'name', 'description', 'people.created_at', 'file_name')
      .join('people', { 'monuments_on_people.person_id': 'people.person_id' })
      .leftJoin('photos', { 'people.photo_id': 'photos.photo_id' })
      .where({ 'monuments_on_people.monument_id': id });
  }

  public getPeopleWithPhoto() {
    return this.knex('people')
      .select('people.person_id', 'name', 'description', 'people.created_at', 'file_name')
      .leftJoin('photos', { 'people.photo_id': 'photos.photo_id' });
  }
}
