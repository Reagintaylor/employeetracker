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
  if (err) {
      console.log(err)
    };
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
console.log("ffff")
console.table("ffffffffffff")
    } else if ('view all roles'){
        view('roles')
        init();

    } else if ('view all employees'){
        view('employees')
        init();

    } else if ('add a department'){
        add('departments')
        init();

    } else if ('add a role'){
        add('roles')
        init();

    } else if ('add an employee'){
        add('employees')
        init();

    } else if ('update an employee role'){
        update('roles')
        init();
       
    } else if ("update an employee manager"){
        update('manager')
        init();

    } else {
        console.log('bye!');
        console.table('bye!');
        process.exit();
    }

  });}

