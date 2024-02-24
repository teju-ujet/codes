var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    port:3307,
    database:"connect",
    password:"teju2000"
});
con.connect(function(err){
    if(err)throw err;
    console.log("connectd");
    con.query("CREATE TABLE laptops(version varchar(10),name_of_laptop varchar(10),procceser varchar(10),address int(20))",function(err){
        if(err)throw err;
        console.log("table created");
    });
});