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
    switch (input.choice){
        case 'View All Departments':
            view('departments')
            init();
            break;
        case 'View All Roles':
            view('roles');
            init();
            break;
        case 'View All Employees':
            view('employees')
            init();
            break;
        case 'Add A Department':
            add('departments')
            // init();
            break;
        case 'Add A Role':
            add('roles')
            // init();
            break;
        case 'Add An Employee':
            add('employees')
            // init();
            break;
        case 'Update An Employee Role':
            update('roles')
            // init();
            break;
        case "Update An Employee Manager":
            update('manager')
            // init();
            break;
        case "Exit": 
            console.table('bye!');
            process.exit();
    }

  });}


  module.exports = init;
