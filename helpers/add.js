const inquirer = require("inquirer");
const db = require('../config/connection');
const { addDepartmentQ, addRoleQs, addEmployeeQs } = require('../src/questions');

const add = () => {
    if ("add a department"){
        inquirer
                .prompt(addDepartmentQ)
                .then((answer) => {
                    let dsql = `INSERT INTO departments (name) VALUES (?)`;
                    let dparams = [answer.departmentName];
                    db.query(dsql, dparams, (err, result) => {
                        if (err) console.log(err);
                        console.log('Department Inserted!')
                    });
                });

    } else if ('add a role'){
            const addRoleQuery = `SELECT * FROM departments`;
            db.query(addRoleQuery, (err, results) => {
                if (err) console.log(err);
                // let choiceArray = [];
                
                results.forEach((element) => {
                    choiceArray.push(`${element.id}:${element.name}`);
                });

                inquirer
                    .prompt(addRoleQs)
                    .then((answers) => {
                        let role_dept = answers.roleDepartment.substring(0, answers.roleDepartment.indexOf(":"));
                        console.log(role_dept)
                        let rsql = `INSERT INTO roles(title, salary, department_id) VALUES ("${answers.roleName}",${answers.roleSalary}, ${role_dept})`;
                        db.query(rsql, (err, result) => {
                            if (err) console.log(err);
                            console.log('Role Inserted!')
                        });
                    });
            });

    } else if ('add an employee') {
            const addEmpQuery="SELECT * FROM employees JOIN roles ON employees.role_id = roles.id"
            db.query(addEmpQuery, (err, results) => {
                if (err) console.log(err);
                // let manArray = [];
                // let roleArray = [];

                results.forEach((element) => {
                    manArray.push(`${element.id}:${element.first_name} ${element.last_name}`);
                });

                results.forEach((element) => {
                    roleArray.push(`${element.id}:${element.title}`);
                });

                inquirer
                    .prompt(addEmployeeQs)
                    .then((answers) => {
                        let roleId = answers.employeeRole.substring(0, answers.employeeRole.indexOf(":")
                        );

                        let manId = answers.employeeManager.substring(0, answers.employeeManager.indexOf(":")
                        );
                        let esql = `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ("${answers.employeeFName}","${answers.employeeLName}",${roleId}, ${manId})`;
                        
                        db.query(esql, (err, result) => {
                            if (err) console.log(err);
                            console.log('Employee Inserted!')
                        });

                    });
            });
        }
    }

module.exports = add;