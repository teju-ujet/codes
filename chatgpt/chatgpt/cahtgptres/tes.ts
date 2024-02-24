import { ApplicationConfig, RestaurantManagementSystemApplication } from './application';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  const app = new RestaurantManagementSystemApplication(options);
  await app.boot();
  await app.start();

  console.log(`Server is running at ${app.restServer.url}`);

  return app;
}

// Start the application
main().catch((err) => {
  console.error('Cannot start the application.', err);
  process.exit(1);
});
