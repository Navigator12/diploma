import { Knex } from 'knex';

import { CreatePersonPayload } from '../dto/people';
import { getOne } from '../utils/knex';

export default class PersonService {
  public constructor(private readonly knex: Knex) {}

  public async createPerson(payload: CreatePersonPayload) {
    const trx = await this.knex.transaction();

    const { person_id } = await this.knex('people').insert(payload, 'person_id').transacting(trx).then(getOne);

    const person = await this.knex('people')
      .select('people.person_id as person_id', 'name', 'description', 'people.created_at as created_at', 'file_name')
      .join('photos', { 'people.photo_id': 'photos.photo_id' })
      .where({ 'people.person_id': person_id })
      .transacting(trx)
      .then(getOne);

    await trx.commit();

    return person;
  }

  public async getPeople() {
    return this.knex('people')
      .select('people.person_id as person_id', 'name', 'description', 'people.created_at as created_at', 'file_name')
      .join('photos', { 'people.photo_id': 'photos.photo_id' });
  }
}
