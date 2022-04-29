export type CreateMonumentPayload = {
  name: string;
  latitude: number;
  longitude: number;
};

export type CreateMonumentBody = {
  name: string;
  latitude: number;
  longitude: number;
};

export type CreateMonument = {
  Body: CreateMonumentBody;
};
