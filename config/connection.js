// TODO
// Create connection to MySQL DB
// Export connection
require('dotenv').config();
var mysql = require('mysql');

//// function dbConnect(callback, opt){
    var options;
    if(process.env.JAWSDB_URL){
        options = JAWSDB_URL
    } else{
        options = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_SECRET,
            database: process.env.DB_NAME
        };
    }

    var connection = mysql.createConnection(options);
    connection.connect(function(err){
        if (err) { throw err }
        else { console.log("success") };
    });
//// };

module.exports = connection;
