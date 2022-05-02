export type CreatePersonData = {
  name: string;
  description?: string;
  photo_id?: string;
};

export type CreatePersonPayload = CreatePersonData;

export type CreatePersonBody = {
  name: string;
  description?: string;
  photo_id?: string;
};

export type CreatePerson = {
  Body: CreatePersonBody;
};
