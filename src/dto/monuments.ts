export type CreateMonumentPayload = {
  name: string;
  latitude: number;
  longitude: number;
  photo_id?: string;
};

export type CreateMonumentBody = {
  name: string;
  latitude: number;
  longitude: number;
  photo_id?: string;
};

export type CreateMonument = {
  Body: CreateMonumentBody;
};
