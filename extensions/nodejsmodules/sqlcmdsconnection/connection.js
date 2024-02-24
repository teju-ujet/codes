var mysql=require("mysql");
var con =mysql.createConnection({
   host:"localhost",
   user:"root",
   port:3307,//without insilize the port we get an error in this so we use port here to specify we are running db in this port
   password:"teju2000"
});
con.connect(function(err){
    if(err)throw err;
    console.log("connected");

});