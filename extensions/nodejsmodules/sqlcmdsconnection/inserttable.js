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
    console.log("connected");
    var sql="INSERT INTO laptops(version,name_of_laptop,procceser,address) VALUES ?";
    var values = [  
        ['winsows10', 'DELL', 'intelI6',8],  
        ['windows11', 'HP', 'intelI7',5],  
        ['windows10', 'LENOVO', 'inteli6',7]  
        ];  
    
        con.query(sql, [values], function(err, result) {  
            if (err) throw err;  
            console.log("Number of records inserted: " + result.affectedRows);  
            });  
            });  