const inquirer = require("inquirer");
const db = require('../config/connection'); 
const { updateQs, updateRoleQs, starterQs } = require('../src/questions');
const init = require('../server')

const update = (starterQs) => {
    if(starterQs == 'Update an employee role') {
            const updateEmpQuery = "SELECT * FROM employees JOIN roles ON employees.role_id = roles.id"
            db.query(updateEmpQuery, (err, results) => {
                if (err) console.log(err);
                let employeeArray = [];
                results.forEach((element) => {
                    employeeArray.push(`${element.id}:${element.first_name} ${element.last_name}`)
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
                        init()
                    });
            });
        }
};

module.exports = update;