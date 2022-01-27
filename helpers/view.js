const db = require('../config/connection');
const table = require('console.table');
const { starterQs } = require('../src/questions');

const view = (starterQs) => {
    if ('departments') {
            let dsql = `SELECT * FROM departments;`;
            db.query(dsql, (err, result) => {
                if (err) console.log(err);
                console.table(result);
                
            });
        } else if ('roles'){
            let rsql = `SELECT * FROM roles;`;
            db.query(rsql, (err, result) => {
                if (err) console.log(err);
                console.table(result);

            });
        } else if ("employees") {
            let esql = "SELECT * FROM employees;";
            db.query(esql, (err, result) => {
                if (err) console.log(err);
                console.table(result);

            });
        }
};

module.exports = view;