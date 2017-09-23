//MySQL Connection set up
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306, //not sure if this needs to be set
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "ba0cf03fcf7397",
    password: "6c19e758",
    database: "heroku_696cdf9118e390b"
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
