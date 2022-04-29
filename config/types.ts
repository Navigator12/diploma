export interface IEnvironment {
  PORT: number;
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  CLOUD_STORAGE_BUCKET_NAME?: string;
  GOOGLE_APPLICATION_CREDENTIALS?: string;
}
