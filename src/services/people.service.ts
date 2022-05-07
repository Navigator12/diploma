import { Knex } from 'knex';

import { PeopleRepository } from '../repositories';
import { CreatePersonPayload } from '../dto/people';
import { getOne } from '../utils/knex';

export default class PersonService {
  public constructor(private readonly knex: Knex, private readonly peopleRepository: PeopleRepository) {}

  public async createPerson(payload: CreatePersonPayload) {
    const trx = await this.knex.transaction();

    const { person_id } = await this.peopleRepository.createPerson(payload).transacting(trx).then(getOne);

    const person = await this.peopleRepository
      .aggregatePerson()
      .where({ 'people.person_id': person_id })
      .transacting(trx)
      .then(getOne);

    await trx.commit();

    return person;
  }

  public async getPeople() {
    return this.peopleRepository.aggregatePerson().orderBy('people.created_at', 'asc');
  }
}
