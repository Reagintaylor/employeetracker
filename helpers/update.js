const inquirer = require("inquirer");
const db = require('../config/connection'); 
const { updateQs, updateRoleQs } = require('../src/questions');
const init = require('../server')

const update = () => {
    if('update an employee role') {
            const updateManQuery = "SELECT * FROM employees JOIN roles ON employees.role_id = roles.id"
            db.query(updateManQuery, (err, results) => {
                if (err) console.log(err);
                // let manArray = [];
                // let employeeArray = [];

                results.forEach((element) => {
                    employeeArray.push(`${element.id}:${element.first_name} ${element.last_name}`)
                });

                results.forEach((element) => {
                    manArray.push(`${element.id}:${element.first_name} ${element.last_name}`);
                });

                inquirer
                    .prompt(updateQs)
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
                            console.log(result)
                        });
                        // init()
                    });
            });
        
        if ("role"){
            const updateRoleQuery = "SELECT * FROM employees JOIN roles ON employees.role_id = roles.id"
            db.query(updateRoleQuery, (err, results) => {
                if (err) console.log(err);
                // let roleArray = [];
                // let employeeArray = [];

                results.forEach((element) => {
                    employeeArray.push(`${element.id}:${element.first_name} ${element.last_name}`)
                });

                results.forEach((element) => {
                    roleArray.push(`${element.id}:${element.title}`);
                });
                inquirer
                    .prompt(updateRoleQs)
                    .then((answers) => {
                        let empId = answers.employeeUpdate.substring(0, answers.employeeUpdate.indexOf(":")
                        );

                        let roleId = answers.roleUpdate.substring(0, answers.roleUpdate.indexOf(":")
                        );
                        let rolesql = `UPDATE employees SET role_id = ? WHERE id = ?`;
                        let roleparams = [roleId, empId];
                        db.query(rolesql, roleparams, (err, result) => {
                            if (err) console.log(err);
                            console.log('Employee Role Updated!')
                            console.log(result)
                        });
                        // init();
                    });
            });
        }
        
    }
};

module.exports = update;