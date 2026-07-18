module.exports = {
  apps: [
    {
      name: 'api',
      script: './dist/server.js',
      cwd: './api',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
