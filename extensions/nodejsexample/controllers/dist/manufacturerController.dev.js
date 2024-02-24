"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var manufacturerService = require('../services/manufacturerService');

var ManufacturerController =
/*#__PURE__*/
function () {
  function ManufacturerController() {
    _classCallCheck(this, ManufacturerController);
  }

  _createClass(ManufacturerController, [{
    key: "getAllManufacturers",
    value: function getAllManufacturers(req, res) {
      var manufacturers;
      return regeneratorRuntime.async(function getAllManufacturers$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(manufacturerService.getAllManufacturers());

            case 3:
              manufacturers = _context.sent;
              res.json(manufacturers);
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
    key: "addManufacturer",
    value: function addManufacturer(req, res) {
      var name;
      return regeneratorRuntime.async(function addManufacturer$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              name = req.body.name;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(manufacturerService.createManufacturer(name));

            case 4:
              res.status(200).json({
                message: 'Manufacturer added successfully'
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
    key: "updateManufacturer",
    value: function updateManufacturer(req, res) {
      var id, name;
      return regeneratorRuntime.async(function updateManufacturer$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.params.id;
              name = req.body.name;
              _context3.prev = 2;
              _context3.next = 5;
              return regeneratorRuntime.awrap(manufacturerService.updateManufacturer(id, name));

            case 5:
              res.status(200).json({
                message: 'Manufacturer updated successfully'
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
    key: "deleteManufacturer",
    value: function deleteManufacturer(req, res) {
      var id;
      return regeneratorRuntime.async(function deleteManufacturer$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              _context4.prev = 1;
              _context4.next = 4;
              return regeneratorRuntime.awrap(manufacturerService.deleteManufacturer(id));

            case 4:
              res.status(200).json({
                message: 'Manufacturer deleted successfully'
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
    key: "addColumnToManufacturer",
    value: function addColumnToManufacturer(req, res) {
      var _req$body, columnName, columnType, columnDefinition;

      return regeneratorRuntime.async(function addColumnToManufacturer$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _req$body = req.body, columnName = _req$body.columnName, columnType = _req$body.columnType;
              _context5.prev = 1;
              columnDefinition = "".concat(columnName, " ").concat(columnType);
              _context5.next = 5;
              return regeneratorRuntime.awrap(manufacturerService.addColumnToManufacturerTable(columnDefinition));

            case 5:
              res.status(200).json({
                message: 'Column added to manufacturer table'
              });
              _context5.next = 12;
              break;

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);
              console.error('Error adding column:', _context5.t0);
              res.status(500).json({
                error: 'Internal server error'
              });

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }]);

  return ManufacturerController;
}();

module.exports = new ManufacturerController();