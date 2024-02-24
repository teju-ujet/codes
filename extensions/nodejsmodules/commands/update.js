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
    con.query("ALTER TABLE student1 ADD behaviour varchar(100)",function(err,result){
        if(err)throw err;
        console.log("altered the new column in table",result);
    });
    con.query("UPDATE student1 SET behaviour='good' WHERE name='teju' ",function(err,result){
        if(err)throw err;
        console.log("updated the value in new row",result);
    });
    con.query("ALTER TABLE student1 DROP COLUMN id",function(err,result){
        if(err)throw err;
        console.log("delete the coloumn",result);
    });
    // con.query("TRUNCATE TABLE employee phone_number",function(err,result){
    //     if(err)throw err;
    //     console.log("truncate student",result);
    // });
    con.query("ALTER TABLE student1 RENAME COLUMN class to branch",function(err,result){
        if(err)throw err;
        console.log("renamed the column",result);
    });

});