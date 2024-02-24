import { ApplicationConfig, WeightTrackerApplication } from './application';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  const app = new WeightTrackerApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

if (require.main === module) {
  const config: ApplicationConfig = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST,
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        setServersFromRequest: true,
      },
    },
  };

  main(config)
    .then(() => {
      console.log('Application started');
    })
    .catch((err) => {
      console.error('Cannot start the application.', err);
      process.exit(1);
    });
}
