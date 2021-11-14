const inquirer = require('inquirer');
const fs = require('fs');
const table = require('console.table');

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


inquirer
  .prompt(startPrompt)
  .then((startPrompt) => {
    if ('view all departments'){
        console.log('departments')
        //present a formatted table showing department names and department ids

    } else if ('view all roles'){
        console.log('roles')
        // presented with the job title, role id, the department that role belongs to, and the salary for that role

    } else if ('view all employees'){
        console.log('employeee')
        //presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    } else if ('add a department'){
        console.log('add depart')
        //I am prompted to enter the name of the department and that department is added to the database

    } else if ('add a role'){
        console.log('add role')
        // I am prompted to enter the name, salary, and department for the role and that role is added to the database
    } else if ('add an employee'){
        console.log('add employ')
        //I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    } else if ('update an employee role'){
        console.log('updated employee role')
        //I am prompted to select an employee to update and their new role and this information is updated in the database 
    } else {
        console.log('exit');
    }

  });

// inquirer  // for 'add department`
//   .prompt(startPrompt)
//   .then((promptChoices, startPrompt) => {
//     console.log('startPrompt')
//     promptChoices;
//   });