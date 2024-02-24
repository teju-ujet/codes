var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'teju2000',
    port: 3307,
    database:"connect"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
        con.query("CREATE TABLE student2(name varchar(20),class varchar(20),id INT NOT NULL,PRIMARY KEY (id),address varchar(20),age int(20))", function (err) {
            if (err) throw err;
            console.log("table1 created");
            con.query("CREATE TABLE employee1(name varchar(20),language varchar(20),id int(20),address varchar(20),age int(20),phone_number int(50))", function (err) {
                if (err) throw err;
                console.log("table2 created");
            });
        });
     });

