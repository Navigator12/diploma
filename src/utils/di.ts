import { diContainer } from 'fastify-awilix';

export function InjectService(token: string) {
  return (target, key) => {
    Object.defineProperty(target, key, {
      get: () => diContainer.resolve(token),
      enumerable: true,
      configurable: true,
    });
  };
}
