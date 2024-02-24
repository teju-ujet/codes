import { RestApplication } from '@loopback/rest';

const app = new RestApplication();

async function main() {
  await app.start();
  console.log(`Server is running at ${app.restServer.url}`);

  // You can add your custom logic here

  // Stop the application when a termination signal is received
  process.once('SIGTERM', () => app.stop());
  process.once('SIGINT', () => app.stop());
}

main().catch((err) => {
  console.error('Unable to start the application:', err);
  process.exit(1);
});
