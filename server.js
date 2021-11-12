
// const fs = require('fs')
const express = require('express')
const mysql = require('mysql2') // How to add the mysql login info

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',
    
    password: 'reagintt',
    database: 'employee_db'
  },
  console.log(`Connected to the books_db database.`)
);


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  