import { init, run } from './server';
import environment from '../config/environment';

const bootstrap = async () => {
  try {
    const server = await init({ environment });

    await run(server);
  } catch (e) {
    // TODO: log
  }
};

bootstrap();
