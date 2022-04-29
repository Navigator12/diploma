import { diContainer } from 'fastify-awilix';
import { Knex } from 'knex';

import { CreateMonumentPayload } from '../dto/monuments';
import { getOne } from '../utils/knex';

export default class MonumentService {
  private readonly knex: Knex;

  public constructor() {
    this.knex = diContainer.resolve<Knex>('knex');
  }

  public async createMonument(payload: CreateMonumentPayload) {
    const trx = await this.knex.transaction();

    const { monument_id } = await this.knex('monuments').insert(payload, 'monument_id').transacting(trx).then(getOne);

    const monument = await this.knex('monuments')
      .select('monuments.monument_id as monument_id', 'latitude', 'longitude', 'monuments.created_at as created_at', 'file_name')
      .join('photos', { 'monuments.photo_id': 'photos.photo_id' })
      .where({ 'monuments.monument_id': monument_id })
      .transacting(trx)
      .then(getOne);

    await trx.commit();

    return monument;
  }

  public async getMonuments() {
    return this.knex('monuments').select(['id', 'name', 'address']);
  }
}
