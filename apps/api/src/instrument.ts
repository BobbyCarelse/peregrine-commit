import Sentry from '@sentry/node';

Sentry.init({
  dsn: 'https://1a932324eb11a2f1a66b005612901029@o392813.ingest.us.sentry.io/4511775628394496',

  // Send structured logs to Sentry
  enableLogs: true,
  integrations: [Sentry.consoleLoggingIntegration({ levels: ['log', 'warn', 'error'] })],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  dataCollection: {
    userInfo: true,
    httpBodies: ['incomingRequest', 'outgoingResponse'],
  },
});
