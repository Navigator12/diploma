import { DirectoryEnum } from '../services/types';

export type CreatePhotoData = {
  file_name: string;
  original_name: string;
};

export type CreatePhotoPayload = {
  file_name: string;
  original_name: string;
};

export type UploadPhotoBody = {
  type: keyof typeof DirectoryEnum;
};

export type UploadPhoto = {
  Body: UploadPhotoBody;
};
