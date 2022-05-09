import { Knex } from 'knex';

import { MonumentsRepository, PeopleRepository } from '../repositories';
import { CreateMonumentPayload } from '../dto/monuments';
import { getOne } from '../utils/knex';

export default class MonumentsService {
  public constructor(
    private readonly knex: Knex,
    private readonly monumentsRepository: MonumentsRepository,
    private readonly peopleRepository: PeopleRepository
  ) {}

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

    const [monument, people] = await Promise.all([
      this.monumentsRepository.getMonumentsWithPhoto().where({ monument_id }).transacting(trx).then(getOne),
      this.peopleRepository.getPeopleWithPhotoByMonumentId(monument_id).transacting(trx),
    ]);

    await trx.commit();

    return {
      ...monument,
      people,
    };
  }

  public async getMonuments() {
    return this.monumentsRepository.getMonumentsWithPhoto().orderBy('monuments.created_at', 'asc');
  }

  public async getMonumentById(id: string) {
    const [monument, people] = await Promise.all([
      this.monumentsRepository.getMonumentsWithPhoto().where({ monument_id: id }).then(getOne),
      this.peopleRepository.getPeopleWithPhotoByMonumentId(id),
    ]);

    return {
      ...monument,
      people,
    };
  }
}
