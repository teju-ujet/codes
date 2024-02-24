"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var pool = require('./db');

var executeQuery = function executeQuery(query, values) {
  var _ref, _ref2, results;

  return regeneratorRuntime.async(function executeQuery$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(pool.query(query, values));

        case 3:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          results = _ref2[0];
          return _context.abrupt("return", results);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var selectQuery = function selectQuery(columns, table, condition, values) {
  var query = "SELECT ".concat(columns, " FROM ").concat(table, " WHERE ").concat(condition);
  return executeQuery(query, values);
};

var insertQuery = function insertQuery(table, data) {
  var query = "INSERT INTO ".concat(table, " SET ?");
  return executeQuery(query, data);
};

var updateQuery = function updateQuery(table, data, conditions) {
  var query = "UPDATE ".concat(table, " SET ? WHERE ").concat(conditions);
  return executeQuery(query, data);
};

var addColumnToTable = function addColumnToTable(table, columnDefinition) {
  var query, _ref3, _ref4, results;

  return regeneratorRuntime.async(function addColumnToTable$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          query = "ALTER TABLE ".concat(table, " ADD COLUMN ").concat(columnDefinition);
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(pool.query(query));

        case 4:
          _ref3 = _context2.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          results = _ref4[0];
          return _context2.abrupt("return", results);

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          throw _context2.t0;

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

var deleteQuery = function deleteQuery(table, conditions) {
  var query = "DELETE FROM ".concat(table, " WHERE ").concat(conditions);
  return executeQuery(query);
};

module.exports = {
  selectQuery: selectQuery,
  insertQuery: insertQuery,
  updateQuery: updateQuery,
  addColumnToTable: addColumnToTable,
  deleteQuery: deleteQuery
}; // const pool = require('./db');
// // const selectQuery =`SELECT %a FROM %b WHERE %c`;
// //     return new Promise((resolve, reject) => {
// //         pool.query(query, (err, results) => {
// //             if (err) {
// //                 reject(err);
// //             } else {
// //                 resolve(results);
// //             }
// //         });
// //     });
//     const selectQuery = (columns, table, condition) => {
//         const query = `SELECT ${columns} FROM ${table} WHERE ${condition}`;
//         return new Promise((resolve, reject) => {
//             pool.query(query, (err, results) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         });
//     };
//     const insertQuery = (table, data) => {
//         const query = `INSERT INTO ${table} SET ?`;
//         return new Promise((resolve, reject) => {
//             pool.query(query, data, (err, results) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         });
//     };
// const updateQuery = (table, data, conditions) => {
//     const query = `UPDATE ${table} SET ? WHERE ${conditions}`;
//     return new Promise((resolve, reject) => {
//         pool.query(query, data, (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };
// const addColumn = async (table, columnDefinition) => {
//     const query = `ALTER TABLE ${table} ADD COLUMN ${columnDefinition}`;
//     try {
//         const [results] = await pool.query(query);
//         return results;
//     } catch (error) {
//         throw error;
//     }
// };
// const deleteQuery = (table, conditions) => {
//     const query = `DELETE FROM ${table} WHERE ${conditions}`;
//     return new Promise((resolve, reject) => {
//         pool.query(query, (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };
// module.exports = {
//     selectQuery,
//     insertQuery,
//     updateQuery,
//    addColumn,// addColumnToLaptops, 
//     deleteQuery
// };