"use strict";

var _require = require('../datasource/query'),
    insertQuery = _require.insertQuery,
    selectQuery = _require.selectQuery,
    updateQuery = _require.updateQuery,
    deleteQuery = _require.deleteQuery,
    addColumnToTable = _require.addColumnToTable;

var createManufacturer = function createManufacturer(name) {
  return regeneratorRuntime.async(function createManufacturer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", insertQuery('manufacturers', {
            name: name
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getAllManufacturers = function getAllManufacturers() {
  return regeneratorRuntime.async(function getAllManufacturers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", selectQuery('*', 'manufacturers'));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var updateManufacturer = function updateManufacturer(id, name) {
  var conditions, data;
  return regeneratorRuntime.async(function updateManufacturer$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          conditions = "id = ".concat(id);
          data = {
            name: name
          };
          return _context3.abrupt("return", updateQuery('manufacturers', data, conditions));

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var deleteManufacturer = function deleteManufacturer(id) {
  var conditions;
  return regeneratorRuntime.async(function deleteManufacturer$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          conditions = "id = ".concat(id);
          return _context4.abrupt("return", deleteQuery('manufacturers', conditions));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var addColumnToManufacturerTable = function addColumnToManufacturerTable(columnDefinition) {
  return regeneratorRuntime.async(function addColumnToManufacturerTable$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(addColumnToTable('manufacturers', columnDefinition));

        case 3:
          console.log('Column added successfully');
          _context5.next = 10;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          console.error('Error adding column:', _context5.t0);
          throw _context5.t0;

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

module.exports = {
  createManufacturer: createManufacturer,
  getAllManufacturers: getAllManufacturers,
  updateManufacturer: updateManufacturer,
  deleteManufacturer: deleteManufacturer,
  addColumnToManufacturerTable: addColumnToManufacturerTable
};