import express, { type NextFunction, type Request, type Response } from 'express';

import Sentry from '@sentry/node';
import cors from 'cors';
import { rateLimiter } from './middleware/rateLimiter';
import { healthRouter } from './routes/health';
import { v1Router } from './routes/v1/v1';

export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(rateLimiter);
  app.use(cors());

  Sentry.setupExpressErrorHandler(app);

  app.use(healthRouter);
  app.use('/v1', v1Router);

  app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: 'Not found' });
  });

  app.use((_err: Error, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).json({ error: 'Internal server error' });
  });

  return app;
};
