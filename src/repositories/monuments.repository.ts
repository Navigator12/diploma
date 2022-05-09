import { Knex } from 'knex';

import { CreateMonumentData, AttachPeopleToMonumentData } from '../dto/monuments';

export default class MonumentsRepository {
  public constructor(private readonly knex: Knex) {}

  public createMonument(data: CreateMonumentData) {
    return this.knex('monuments').insert(data, '*');
  }

  public attachPeople(data: AttachPeopleToMonumentData) {
    return this.knex('monuments_on_people').insert(
      data.person_ids.map((person_id) => ({
        person_id,
        monument_id: data.monument_id,
      }))
    );
  }

  public getMonumentsWithPhoto() {
    return this.knex('monuments')
      .select('monument_id', 'name', 'latitude', 'longitude', 'description', 'type', 'monuments.created_at', 'file_name')
      .leftJoin('photos', { 'monuments.photo_id': 'photos.photo_id' });
  }
}
