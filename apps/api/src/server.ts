require('./instrument.js');

import Sentry from '@sentry/node';
import { createApp } from './app';

const PORT = Number(process.env.PORT ?? 3000);
// Loopback-only by default: the API is reached via a reverse proxy on the same host, never directly.
const HOST = process.env.HOST ?? '127.0.0.1';

const app = createApp();

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, HOST, () => {
  console.log(`api listening on ${HOST}:${PORT}`);
});
