var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"teju2000",
    port:3307,
    database:"connect"

});
con.connect(function(err){
    if(err)throw err;
    console.log("connected");

var sql="UPDATE laptops SET address=545 WHERE address=5";
con.query(sql,function(err,result){
    if(err)throw err;
    console.log("updated rows:",result.affectedRows);
});
});