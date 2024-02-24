const pool = require('./db');

const executeQuery = async (query, values) => {
    try {
        const [results] = await pool.query(query, values);
        return results;
    } catch (error) {
        throw error;
    }
};

const selectQuery = (columns, table, condition, values) => {
    const query = `SELECT ${columns} FROM ${table} WHERE ${condition}`;
    return executeQuery(query, values);
};

const insertQuery = (table, data) => {
    const query = `INSERT INTO ${table} SET ?`;
    return executeQuery(query, data);
};

const updateQuery = (table, data, conditions) => {
    const query = `UPDATE ${table} SET ? WHERE ${conditions}`;
    return executeQuery(query, data);
};

const addColumnToTable = async (table, columnDefinition) => {
    const query = `ALTER TABLE ${table} ADD COLUMN ${columnDefinition}`;
    try {
        const [results] = await pool.query(query);
        return results;
    } catch (error) {
        throw error;
    }
};

const deleteQuery = (table, conditions) => {
    const query = `DELETE FROM ${table} WHERE ${conditions}`;
    return executeQuery(query);
};

module.exports = {
    selectQuery,
    insertQuery,
    updateQuery,
    addColumnToTable,
    deleteQuery,
};
// const pool = require('./db');

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