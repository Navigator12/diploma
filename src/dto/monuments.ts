export type GetMonumentByIdParams = {
  id: string;
};

export type GetMonumentById = {
  Params: GetMonumentByIdParams;
};

export type CreateMonumentData = {
  name: string;
  latitude: number;
  longitude: number;
  description?: string;
  photo_id?: string;
  type: string;
};

export type AttachPeopleToMonumentData = {
  monument_id: string;
  person_ids: string[];
};

export type CreateMonumentPayload = {
  monumentPayload: CreateMonumentData;
  person_ids?: string[];
};

export type CreateMonumentBody = {
  name: string;
  latitude: number;
  longitude: number;
  description?: string;
  photo_id?: string;
  type: string;
  person_ids?: string[];
};

export type CreateMonument = {
  Body: CreateMonumentBody;
};
