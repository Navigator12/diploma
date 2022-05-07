import { Knex } from 'knex';

import { MonumentsRepository } from '../repositories';
import { CreateMonumentPayload } from '../dto/monuments';
import { getOne } from '../utils/knex';

export default class MonumentsService {
  public constructor(private readonly knex: Knex, private readonly monumentsRepository: MonumentsRepository) {}

  public async createMonument({ monumentPayload, person_ids }: CreateMonumentPayload) {
    const trx = await this.knex.transaction();

    const { monument_id } = await this.monumentsRepository.createMonument(monumentPayload).transacting(trx).then(getOne);

    if (person_ids) {
      await this.monumentsRepository
        .attachPeople({
          monument_id,
          person_ids,
        })
        .transacting(trx);
    }

    const monument = await this.monumentsRepository
      .aggregateMonuments()
      .where({ 'monuments.monument_id': monument_id })
      .transacting(trx)
      .then(getOne);

    await trx.commit();

    return monument;
  }

  public async getMonuments() {
    return this.monumentsRepository.aggregateMonuments().orderBy('monuments.created_at', 'asc');
  }
}
