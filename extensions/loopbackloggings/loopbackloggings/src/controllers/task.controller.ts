
import { get } from '@loopback/rest';
import { CustomLogger } from '../custom-logger';
import { inject } from '@loopback/core';
import { v4 as uuidv4 } from 'uuid';

export class TaskController{
  constructor(
    @inject('log.customLogger') private customLogger: CustomLogger,
  ) {}

  @get('/hello')
  async hello(): Promise<string> {
    // Generate a trace ID using uuid
    const traceId = uuidv4();

    // Log with the trace ID
    this.customLogger.info('Hello, world!', traceId);

    return 'Hello, world!';
  }
}

// import { post, requestBody, Request, RestBindings } from '@loopback/rest';
// import { Task } from '../models';
// import { inject } from '@loopback/core';
// import { TaskRepository } from '../repositories/task.repository'; // Import the task repository

// export class TaskController {
//   constructor(
//     @inject('utils.logger') private logger: any,
//     @inject('repositories.TaskRepository') private taskRepository: TaskRepository, // Inject the task repository
//   ) {}

//   @post('/logger', {
//     responses: {
//       '200': {
//         description: 'Task model instance',
//         content: { 'application/json': { schema: { 'x-ts-type': Task } } },
//       },
//     },
//   })
//   async create(
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: { 'x-ts-type': Task },
//         },
//       },
//     })
//     task: Task,
//     @inject(RestBindings.Http.REQUEST) request: Request,
//   ): Promise<Task> {
//     const traceId = request.headers['x-trace-id'] || 'null';
//     const timestamp = new Date().toISOString();

//     this.logger.info(` [TRACE-ID: ${traceId}] :POST "/logger", parameters=${JSON.stringify(task)}`);

//     // Save the task to the database
//     const savedTask = await this.taskRepository.create(task);

//     return savedTask;
//   }
// }
