var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    port:3307,
    password:"teju2000",
    database:"connect"
    
});
con.connect(function(err){
    if(err)throw err;
    console.log("connected");
    con.query("SELECT*FROM laptops",function(err,result){
        if(err)throw err;
        console.log(result);
    });
        con.query("SELECT * FROM laptops WHERE address ='7' ", function (err, result) { //this query prints only the specified row which we have given
            if(err)throw err;
            console.log(result);
    });
});