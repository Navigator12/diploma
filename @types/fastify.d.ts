import { IEnvironment } from '../config/types';
import { RequestFile } from '../src/services/types';

declare module 'fastify' {
  interface FastifyInstance {
    environment: IEnvironment;
  }

  interface FastifyRequest {
    file: RequestFile;
  }
}
