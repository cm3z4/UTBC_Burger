var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root', // Enter your user here.
        password: 'password', // Enter your password here.
        database: 'burgers_db' // Enter your database.
    });
};

// Export connection.
module.exports = connection;