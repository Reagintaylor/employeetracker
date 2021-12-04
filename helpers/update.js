const inquirer = require("inquirer");
const db = require('../config/server.js'); //should I require db?

const update = () => {
    if('update an employee role') {
            const updateManQuery = "SELECT * FROM employees JOIN roles ON employees.role_id = roles.id"
            db.query(updateManQuery, (err, results) => {
                if (err) console.log(err);
                let manArray = [];
                let employeeArray = [];

                results.forEach((element) => {
                    employeeArray.push(`${element.id}:${element.first_name} ${element.last_name}`)
                });

                results.forEach((element) => {
                    manArray.push(`${element.id}:${element.first_name} ${element.last_name}`);
                });

                inquirer
                    .prompt([
                        {
                            type: "list",
                            message: "Which employee do you want to update?",
                            name: "employeeUpdate",
                            choices: employeeArray,
                        },
                        {
                            type: "list",
                            message: "Who is their managers now?",
                            name: "manUpdate",
                            choices: manArray,
                        }
                    ])
                    .then((answers) => {
                        let empId = answers.employeeUpdate.substring(0, answers.employeeUpdate.indexOf(":")
                        );

                        let manId = answers.manUpdate.substring(0, answers.manUpdate.indexOf(":")
                        );

                        let msql = `UPDATE employees SET manager_id = ? WHERE id = ?`;
                        let mparams = [manId, empId];
                        db.query(msql, mparams, (err, result) => {
                            if (err) console.log(err);
                            console.log('Employee Manager Updated!')
                        });
                    });
            });
        
        if ("role"):
            const updateRoleQuery = "SELECT * FROM employees JOIN roles ON employees.role_id = roles.id"
            db.query(updateRoleQuery, (err, results) => {
                if (err) console.log(err);
                let roleArray = [];
                let employeeArray = [];

                results.forEach((element) => {
                    employeeArray.push(`${element.id}:${element.first_name} ${element.last_name}`)
                });

                results.forEach((element) => {
                    roleArray.push(`${element.id}:${element.title}`);
                });
                inquirer
                    .prompt([
                        {
                            type: "list",
                            message: "Which employee do you want to update?",
                            name: "employeeUpdate",
                            choices: employeeArray,
                        },
                        {
                            type: "list",
                            message: "Chose their new role?",
                            name: "roleUpdate",
                            choices: roleArray,
                        }
                    ])
                    .then((answers) => {
                        let empId = answers.employeeUpdate.substring(0, answers.employeeUpdate.indexOf(":")
                        );

                        let roleId = answers.roleUpdate.substring(0, answers.roleUpdate.indexOf(":")
                        );
                        let rsql = `UPDATE employees SET role_id = ? WHERE id = ?`;
                        let rparams = [roleId, empId];
                        db.query(rsql, rparams, (err, result) => {
                            if (err) console.log(err);
                            console.log('Employee Role Updated!')
                        });
                    });
            });
        
    }
};

module.exports = update;