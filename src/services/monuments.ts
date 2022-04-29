import { diContainer } from 'fastify-awilix';
import { Knex } from 'knex';

import { CreateMonumentPayload } from '../dto/monuments';
import { getOne } from '../utils/knex';

export default class MonumentService {
  private readonly knex;

  public constructor() {
    this.knex = diContainer.resolve<Knex>('knex');
  }

  public async createMonument(payload: CreateMonumentPayload) {
    return this.knex('monuments').insert(payload, '*').then(getOne);
  }

  public async getMonuments() {
    return this.knex('monuments').select(['id', 'name', 'address']);
  }
}
