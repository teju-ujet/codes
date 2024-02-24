const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: 3307,
  database: "example",
  password: "teju2000",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();

// const mysql = require('mysql2');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   port: 3307,
//   database: "example",
//   password: "teju2000",
// });

// console.log("connected");

// module.exports = con.promise();