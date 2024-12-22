const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'capstone'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Terhubung ke Database')
});

module.exports = db;