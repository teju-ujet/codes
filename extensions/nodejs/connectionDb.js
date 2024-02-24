
var mysql = require('mysql');  
var con = mysql.createConnection({  
  host: "localhost" ,
  database:"demo",
   
  user: "root", 
    port:3307,
  password: "teju2000"
});  
con.connect(function(err) {  
  if (err) {  
  return console.error('error'+err.message);  
  }
  console.log("connectd to mysql server");

    var sql = "CREATE TABLE people(id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";  
    con.query(sql, function (err, result) { 
    if(err){
            return console.error('error'+err.message);

        }
        console.log("table created");
        
        var sql="INSERT INTO people(id,name,age,city)VALUES(1,'teju',22,'hyd')";
        con.query(sql, function (err, result) { 
            if(err){
                    return console.error('error'+err.message);
        
                }
                console.log("inserted values");
            });
    });

  });
 