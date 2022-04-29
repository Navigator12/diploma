import { Readable } from 'stream';

export interface BucketData {
  fileName: string;
  originalName: string;
}

export interface RequestFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  stream: Readable;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

export const enum DirectoryEnum {
  monumentPhotos = 'profile-photos',
}
