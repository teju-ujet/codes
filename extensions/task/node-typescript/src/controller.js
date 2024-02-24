"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTasks = exports.putTasks = exports.postTasks = exports.getTasks = void 0;
var Fs = require("fs");
var Path = require("path");
var getTasks = function (req, res) {
    return Fs.readFile(Path.join(__dirname, "store.json"), "utf8", function (err, data) {
        if (err) {
            // error, send an error message
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                success: false,
                error: err,
            }));
        }
        else {
            // no error, send the data
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                success: true,
                message: JSON.parse(data),
            }));
        }
    });
};
exports.getTasks = getTasks;
var postTasks = function (req, res) {
    // Read the data from the request
    var data = "";
    req.on("data", function (chunk) {
        data += chunk.toString();
    });
    // When the request is done
    req.on("end", function () {
        var task = JSON.parse(data);
        // Read the store.json file
        Fs.readFile(Path.join(__dirname, "store.json"), "utf8", function (err, data) {
            // Check out any errors
            if (err) {
                // error, send an error message
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    success: false,
                    error: err,
                }));
            }
            else {
                // no error, get the current tasks
                var tasks = JSON.parse(data);
                // get the id of the latest task
                var latest_id = tasks.reduce(function (max, task) {
                    if (max === void 0) { max = 0; }
                    return (task.id > max ? task.id : max);
                }, 0);
                // increment the id by 1
                task.id = latest_id + 1;
                // add the new task to the tasks array
                tasks.push(task);
                // write the new tasks array to the store.json file
                Fs.writeFile(Path.join(__dirname, "store.json"), JSON.stringify(tasks), function (err) {
                    // Check out any errors
                    if (err) {
                        // error, send an error message
                        res.writeHead(500, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({
                            success: false,
                            error: err,
                        }));
                    }
                    else {
                        // no error, send the data
                        res.writeHead(200, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({
                            success: true,
                            message: task,
                        }));
                    }
                });
            }
        });
    });
};
exports.postTasks = postTasks;
var putTasks = function (req, res) {
    // Read the data from the request
    var data = "";
    req.on("data", function (chunk) {
        data += chunk.toString();
    });
    // When the request is done
    req.on("end", function () {
        // Parse the data
        var task = JSON.parse(data);
        // Read the store.json file
        Fs.readFile(Path.join(__dirname, "store.json"), "utf8", function (err, data) {
            // Check out any errors
            if (err) {
                // error, send an error message
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    success: false,
                    error: err,
                }));
            }
            else {
                // no error, get the current tasks
                var tasks = JSON.parse(data);
                // find the task with the id
                var index = tasks.findIndex(function (t) { return t.id == task.id; });
                // replace the task with the new one
                tasks[index] = task;
                // write the new tasks array to the store.json file
                Fs.writeFile(Path.join(__dirname, "store.json"), JSON.stringify(tasks), function (err) {
                    // Check out any errors
                    if (err) {
                        // error, send an error message
                        res.writeHead(500, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({
                            success: false,
                            error: err,
                        }));
                    }
                    else {
                        // no error, send the data
                        res.writeHead(200, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({
                            success: true,
                            message: task,
                        }));
                    }
                });
            }
        });
    });
};
exports.putTasks = putTasks;
var deleteTasks = function (req, res) {
    // Read the data from the request
    var data = "";
    req.on("data", function (chunk) {
        data += chunk.toString();
    });
    // When the request is done
    req.on("end", function () {
        // Parse the data
        var task = JSON.parse(data);
        // Read the store.json file
        Fs.readFile(Path.join(__dirname, "store.json"), "utf8", function (err, data) {
            // Check out any errors
            if (err) {
                // error, send an error message
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    success: false,
                    error: err,
                }));
            }
            else {
                // no error, get the current tasks
                var tasks = JSON.parse(data);
                // find the task with the id
                var index = tasks.findIndex(function (t) { return t.id == task.id; });
                // remove the task
                tasks.splice(index, 1);
                // write the new tasks array to the store.json file
                Fs.writeFile(Path.join(__dirname, "store.json"), JSON.stringify(tasks), function (err) {
                    // Check out any errors
                    if (err) {
                        // error, send an error message
                        res.writeHead(500, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({
                            success: false,
                            error: err,
                        }));
                    }
                    else {
                        // no error, send the data
                        res.writeHead(200, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({
                            success: true,
                            message: task,
                        }));
                    }
                });
            }
        });
    });
};
exports.deleteTasks = deleteTasks;
