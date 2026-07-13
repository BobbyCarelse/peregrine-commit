import request from 'supertest';

import { createApp } from './app';

describe('app', () => {
  it('returns ok from the health check', async () => {
    const app = createApp();

    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  it('returns a 404 for unknown routes', async () => {
    const app = createApp();

    const response = await request(app).get('/does-not-exist');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Not found' });
  });
});

describe('rate limiting', () => {
  const originalMax = process.env.RATE_LIMIT_MAX;

  beforeEach(() => {
    process.env.RATE_LIMIT_MAX = '2';
    jest.resetModules();
  });

  afterEach(() => {
    process.env.RATE_LIMIT_MAX = originalMax;
  });

  it('blocks requests once the limit is exceeded', async () => {
    const { createApp: createLimitedApp } = await import('./app');
    const app = createLimitedApp();

    await request(app).get('/health');
    await request(app).get('/health');
    const response = await request(app).get('/health');

    expect(response.status).toBe(429);
  });
});
