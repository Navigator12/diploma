import { Bucket, File, Storage } from '@google-cloud/storage';
import { Writable } from 'stream';

import environment from '../../config/environment';
import { DirectoryEnum, RequestFile, BucketData } from './types';

export default class BucketService {
  private readonly storage: Storage;

  private readonly bucket: Bucket;

  public constructor() {
    this.storage = new Storage();
    this.bucket = this.storage.bucket(environment.CLOUD_STORAGE_BUCKET_NAME);
  }

  public async uploadFile(file: RequestFile, directory: DirectoryEnum): Promise<BucketData> {
    const blob: File = this.bucket.file(file.originalname);
    const fileName: string = `${directory}/${Date.now()}-${file.originalname}`;

    blob.name = fileName;
    const blobStream: Writable = blob.createWriteStream();

    return new Promise((resolve, reject) => {
      blobStream
        .on('error', (e: Error) => reject(e))
        .end(file.buffer, () => {
          resolve({
            fileName,
            originalName: file.originalname,
          });
        });
    });
  }
}
