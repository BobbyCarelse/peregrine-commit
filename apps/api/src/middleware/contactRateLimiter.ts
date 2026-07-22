import { rateLimit } from 'express-rate-limit';

const WINDOW_MS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 24 * 60 * 60 * 1000);
const MAX_REQUESTS = Number(process.env.CONTACT_RATE_LIMIT_MAX ?? 3);

export const contactRateLimiter = rateLimit({
  windowMs: WINDOW_MS,
  limit: MAX_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many contact requests. Please try again tomorrow.' },
});
