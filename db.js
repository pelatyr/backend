
// ######################################
// const mysql = require('mysql');

// //mysql connect

// const  con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'web'
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });    
// module.exports = con;
// ######################################
module.exports = (mysql) => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        port: "3306",
        database: "web"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });    
    return con
}