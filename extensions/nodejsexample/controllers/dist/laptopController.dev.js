"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var laptopService = require('../services/laptopService');

var LaptopController =
/*#__PURE__*/
function () {
  function LaptopController() {
    _classCallCheck(this, LaptopController);
  }

  _createClass(LaptopController, [{
    key: "getAllLaptops",
    value: function getAllLaptops(req, res) {
      var laptops;
      return regeneratorRuntime.async(function getAllLaptops$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(laptopService.getAllLaptops());

            case 3:
              laptops = _context.sent;
              res.json(laptops);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).json({
                error: 'Internal server error'
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "addLaptop",
    value: function addLaptop(req, res) {
      var model;
      return regeneratorRuntime.async(function addLaptop$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              model = req.body.model;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(laptopService.createLaptop(model));

            case 4:
              res.status(200).json({
                message: 'Laptop added successfully'
              });
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](1);
              res.status(500).json({
                error: 'Internal server error'
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }
  }, {
    key: "updateLaptop",
    value: function updateLaptop(req, res) {
      var id, model;
      return regeneratorRuntime.async(function updateLaptop$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.params.id;
              model = req.body.model;
              _context3.prev = 2;
              _context3.next = 5;
              return regeneratorRuntime.awrap(laptopService.updateLaptop(id, model));

            case 5:
              res.status(200).json({
                message: 'Laptop updated successfully'
              });
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](2);
              res.status(500).json({
                error: 'Internal server error'
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[2, 8]]);
    }
  }, {
    key: "deleteLaptop",
    value: function deleteLaptop(req, res) {
      var id;
      return regeneratorRuntime.async(function deleteLaptop$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              _context4.prev = 1;
              _context4.next = 4;
              return regeneratorRuntime.awrap(laptopService.deleteLaptop(id));

            case 4:
              res.status(200).json({
                message: 'Laptop deleted successfully'
              });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](1);
              res.status(500).json({
                error: 'Internal server error'
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[1, 7]]);
    }
  }, {
    key: "addColumnToLaptopsTable",
    value: function addColumnToLaptopsTable(req, res) {
      var _req$body, columnName, columnType, columnDefinition;

      return regeneratorRuntime.async(function addColumnToLaptopsTable$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log('req.body:', req.body);
              _req$body = req.body, columnName = _req$body.columnName, columnType = _req$body.columnType;
              _context5.prev = 2;
              columnDefinition = "".concat(columnName, " ").concat(columnType);
              _context5.next = 6;
              return regeneratorRuntime.awrap(laptopService.addColumn(columnDefinition));

            case 6:
              res.status(200).json({
                message: 'Column added to laptops table'
              });
              _context5.next = 13;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](2);
              console.error('Error adding column:', _context5.t0);
              res.status(500).json({
                error: 'Internal server error'
              });

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[2, 9]]);
    }
  }]);

  return LaptopController;
}();

module.exports = new LaptopController();