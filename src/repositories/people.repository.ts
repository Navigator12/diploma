import { Knex } from 'knex';

import { CreatePersonData } from '../dto/people';

export default class PeopleRepository {
  public constructor(private readonly knex: Knex) {}

  public createPerson(data: CreatePersonData) {
    return this.knex('people').insert(data, '*');
  }

  public aggregatePerson() {
    return this.knex('people')
      .select('people.person_id', 'name', 'description', 'people.created_at', 'file_name')
      .leftJoin('photos', { 'people.photo_id': 'photos.photo_id' });
  }
}
