"use strict";

var express = require('express');

var axios = require('axios');

var app = express();
var port = 8000;
app.get('/thirdapi', function _callee(req, res) {
  var apiResponse, responseData, entries;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get('https://api.publicapis.org/entries'));

        case 3:
          apiResponse = _context.sent;
          responseData = apiResponse.data; // Extract relevant information from the API response

          entries = responseData.entries.map(function (entry) {
            return {
              title: entry.API,
              description: entry.Description,
              category: entry.Category,
              link: entry.Link
            };
          });
          res.json(entries);
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          console.error(_context.t0.response ? _context.t0.response.data : 'No response data');
          res.status(500).send('Failed to process the request.');

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});