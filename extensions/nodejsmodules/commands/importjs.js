var mysql = require('./tables.js');
var http = require("http");  
http.createServer(function (request, response) {  
    response.writeHead(200, {'Content-Type': 'text/plain'}); 
    response.end(mysql);
   
}).listen(8087);  
console.log(mysql);
console.log('Server running at http://127.0.0.1:8087/');  
