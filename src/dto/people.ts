export type CreatePersonPayload = {
  name: string;
  description?: string;
  photo_id?: string;
};

export type CreatePersonBody = {
  name: string;
  description?: string;
  photo_id?: string;
};

export type CreatePerson = {
  Body: CreatePersonBody;
};
