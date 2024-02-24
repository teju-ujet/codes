var mysql=require("mysql");
var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    port:3307,
    password:"teju2000"
});
con.connect(function(err){
    if(err)throw err;
    console.log("connected");
    con.query("CREATE DATABASE Connect",function(err,result){
        if(err)throw err;
        console.log("database created");
    });

});