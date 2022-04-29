import { RequestFile } from '../src/services/types';

declare module 'fastify' {
  interface FastifyRequest {
    file: RequestFile;
  }
}
