"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http = require("http");
var controller_1 = require("./controller");
// create the http server
var server = Http.createServer(function (req, res) {
    // get tasks
    if (req.method == "GET" && req.url == "/api/tasks") {
        return (0, controller_1.getTasks)(req, res);
    }
    // Creating a task
    if (req.method == "POST" && req.url == "/api/tasks") {
        return (0, controller_1.postTasks)(req, res);
    }
    // Updating a task
    if (req.method == "PUT" && req.url == "/api/tasks") {
        return (0, controller_1.putTasks)(req, res);
    }
    // Deleting a task
    if (req.method == "DELETE" && req.url == "/api/tasks") {
        return (0, controller_1.deleteTasks)(req, res);
    }
});
// set up the server port and listen for connections
server.listen(3001, function () {
    console.log("Server is running on port 3001");
});
