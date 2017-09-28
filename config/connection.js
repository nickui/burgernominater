//MySQL Connection set up
var mysql = require('mysql');

var connection = mysql.createConnection({
    //port: 3306, //not sure if this needs to be set
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASS,
    database: process.env.DB_DB
});

//Make Connection
connection.connect(function(err){
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

//Export connection for the ORM to use.
module.exports = connection;
