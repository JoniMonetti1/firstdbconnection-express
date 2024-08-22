const mysql = require('mysql2/promise');
require('dotenv').config();

async function connectDB() {
    const conection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
    const result = await conection.query('SELECT * FROM actor');
    console.log(result);
}

module.exports = connectDB;


