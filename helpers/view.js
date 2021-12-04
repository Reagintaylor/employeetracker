const db = require('../config/connection');
const table = require('console.table');

const view = function(type) {
    switch (type) {
        case "departments":
            let dsql = `SELECT * FROM departments`;
            db.query(dsql, (err, result) => {
                if (err) console.log(err);
                table(result);
                
            });
            break;
        case "roles":
            let rsql = `SELECT * FROM roles`;
            db.query(rsql, (err, result) => {
                if (err) console.log(err);
                table(result);

            });

            break;
        case "employees":
            let esql = "SELECT * FROM employees";
            db.query(esql, (err, result) => {
                if (err) console.log(err);
                table(result);

            });

            break;
    }

};

module.exports = view;