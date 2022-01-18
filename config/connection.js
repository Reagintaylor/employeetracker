require('dotenv').config();
const mysql = require('mysql2')

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: 'reagintt',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// export the db so it can actually be used
module.exports = db;