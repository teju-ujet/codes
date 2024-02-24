var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3307,
    password: "teju2000",
    database: "connect"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("connected");//from both table age column whaever the value is same that value was got from the given columns
    // con.query("SELECT student1.name,student1.id,employee.phone_number from student1 INNER JOIN employee ON student1.age=employee.age", function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     con.query("SELECT student1.name,student1.id,employee.phone_number from student1 LEFT JOIN employee ON student1.age=employee.age", function (err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //         con.query("SELECT student1.name,student1.id,employee.phone_number from student1 RIGHT JOIN employee ON student1.age=employee.age", function (err, result) {
    //         }); if (err) throw err;
    //         console.log(result);
        //});
    //});
    
});
