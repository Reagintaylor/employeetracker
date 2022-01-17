const inquirer = require('inquirer');
const fs = require('fs');
const table = require('console.table');
const db = require('./config/connection')
// const update = require('./')
// const view = require('./')
// const add = require('./')
const path = require('path');
const { inherits } = require('util');// where is inherits from?

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Query database
db.query('SELECT * FROM //table name ', function (err, results) {
    console.log(results);
  });


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  module.exports = db;


const startPrompt = [
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'employeeTrackerOptions',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit'],
    }
  ];

// fix inquirer path to where it needs to go
// inquirer
//   .prompt(startPrompt)
//   .then((data) => {
//     const filename = `employeeTracker.json`;

//     fs.writeFileSync(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     ); //figure out how to append more data to the file, instead of it replacing the old data
//   });


async function init() {
    inquirer
  .prompt(startPrompt)
  .then((startPrompt) => {
    if ('view all departments'){
        console.log('departments')

        init();
        //present a formatted table showing department names and department ids

    } else if ('view all roles'){
        console.log('roles')

        init();
        // presented with the job title, role id, the department that role belongs to, and the salary for that role

    } else if ('view all employees'){
        console.log('employeee')

        init();
        //presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    } else if ('add a department'){
        console.log('add depart')

        init();
        //I am prompted to enter the name of the department and that department is added to the database

    } else if ('add a role'){
        console.log('add role')

        init();
        // I am prompted to enter the name, salary, and department for the role and that role is added to the database
    } else if ('add an employee'){
        console.log('add employ')

        init();
        //I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    } else if ('update an employee role'){
        console.log('updated employee role')
        
        init();
        //I am prompted to select an employee to update and their new role and this information is updated in the database 
    } else {
        console.log('bye!');
        process.exit();
    }

  });}

// inquirer  // for 'add department`
//   .prompt(startPrompt)
//   .then((promptChoices, startPrompt) => {
//     console.log('startPrompt')
//     promptChoices;
//   });

db.connect((err) => {
    if(err){
        console.log("Failed to connect to the database");
    } else {
      `/n Welcome to the Employee Tracker /n`
      init();
    }
})