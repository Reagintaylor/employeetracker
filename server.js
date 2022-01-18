const inquirer = require('inquirer');
const table = require('console.table');
const db = require('./config/connection')
// functions I need
const update = require('./helpers/update')
const view = require('./helpers/view')
const add = require('./helpers/add')
const { starterQs } = require('./src/questions');

//Starts the app
db.connect((err) => {
  if (err) throw err;
  console.log("\n EMPLOYEE TRACKER \n");
  init();
});

// beginning of questions
async function init() {
    inquirer
  .prompt(starterQs)
  .then((input) => {
    if ('view all departments'){
        view('departments')
        init();

    } else if ('view all roles'){
        view('roles')
        init();

    } else if ('view all employees'){
        view('employeee')
        init();

    } else if ('add a department'){
        add('department')
        init();

    } else if ('add a role'){
        add('role')
        init();

    } else if ('add an employee'){
        add('employee')
        init();

    } else if ('update an employee role'){
        update('role')
        init();
       
    } else if ("update an employee manager"){
        update('manager')
        init();

    } else {
        console.log('bye!');
        table('bye!');
        process.exit();
    }

  });}

  