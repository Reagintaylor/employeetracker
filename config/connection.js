require('dotenv').config();
const mysql = require('mysql2')

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    port: 3301,
    user: process.env.DB_USER,
    password: 'reagintt',
    database: 'employee_db'
  },
  console.log(`Connected to the books_db database.`)
);
