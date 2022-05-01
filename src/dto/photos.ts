import { DirectoryEnum } from '../services/types';

export type CreatePhotoPayload = {
  fileName: string;
  originalName: string;
};

export type UploadPhotoBody = {
  type: keyof typeof DirectoryEnum;
};

export type UploadPhoto = {
  Body: UploadPhotoBody;
};
