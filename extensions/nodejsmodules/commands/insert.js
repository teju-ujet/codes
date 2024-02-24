var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "connect",
    port: 3307,
    password: "teju2000"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
    // var sql = "INSERT INTO student1(name,class,id,address,age)VALUES?";
    // var values = [
    //    ["teju", "cse", 505, 'hyd', 22],
    //     ["sai", "cse", 506, 'viz', 23],
    //     ["sweety", "ece", 502, 'banglore', 21]
    // ];
    // con.query(sql, [values], function (err, result) {
    //     if (err) throw err;
    //     console.log("Number of records inserted: " + result.affectedRows);
    // });
    // // var sql="INSERT INTO employee(name,language,id,address,age,phone_number)VALUES?";
    // var values=[
    //     ["teju","javascript",101,"hyd",22,95879454],
    //     ["palavi","java",102,"delhi",25,98741554],
    //     ["pinky","nodejs",108,"canada",24,95874656]
    // ];
    // con.query(sql,[values],function(err,result){
    //     if(err)throw err;
    //     console.log("number of values inserted:"+result.affectedRows);
    // });
    //     con.query("DELETE FROM student1 WHERE id=505",function(err){
    //         if(err)throw err;
    //         console.log("the values get deleted");
    //     });
    // });
});
   
