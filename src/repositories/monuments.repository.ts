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

  public aggregateMonuments() {
    return this.knex('monuments')
      .select(
        'monuments.monument_id',
        'monuments.name',
        'latitude',
        'longitude',
        'monuments.description',
        'monuments.created_at',
        'monument_photos.file_name',
        this.knex.raw(
          `json_agg(
            json_build_object(
              'person_id', people.person_id,
              'name', people.name,
              'description', people.description,
              'created_at', people.created_at,
              'file_name', person_photos.file_name
            )
          ) as people`
        )
      )
      .leftJoin('photos as monument_photos', { 'monuments.photo_id': 'monument_photos.photo_id' })
      .leftJoin('monuments_on_people', { 'monuments.monument_id': 'monuments_on_people.monument_id' })
      .leftJoin('people', { 'monuments_on_people.person_id': 'people.person_id' })
      .leftJoin('photos as person_photos', { 'people.photo_id': 'person_photos.photo_id' })
      .groupBy(
        'monuments.monument_id',
        'monuments.name',
        'latitude',
        'longitude',
        'monuments.description',
        'monuments.created_at',
        'monument_photos.file_name'
      );
  }
}
