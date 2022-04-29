import { init, run } from './server';
import environment from '../config/environment';

const bootstrap = async () => {
  const server = await init({ environment });

  await run(server);
};

bootstrap().catch((e) => {
  console.log(e.message);
  process.exit(1);
});
