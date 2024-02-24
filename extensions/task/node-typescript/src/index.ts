import * as Http from 'http';

import { getTasks, postTasks, putTasks, deleteTasks } from "./controller";

// create the http server
const server = Http.createServer((req, res) => {
   // get tasks
   if (req.method == "GET" && req.url == "/api/tasks") {
     return getTasks(req, res);
   }

   // Creating a task
   if (req.method == "POST" && req.url == "/api/tasks") {
     return postTasks(req, res);
   }

   // Updating a task
   if (req.method == "PUT" && req.url == "/api/tasks") {
     return putTasks(req, res);
   }

   // Deleting a task
   if (req.method == "DELETE" && req.url == "/api/tasks") {
     return deleteTasks(req, res);
   }
});

// set up the server port and listen for connections
server.listen(3001, () => {
   console.log("Server is running on port 3001");
});