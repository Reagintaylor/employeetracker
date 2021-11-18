SELECT *
FROM employee_db
JOIN roles ON departments.id = roles.department_id;

SELECT *
FROM employee_db
JOIN employees ON roles.id = employees.role_id
JOIN employees ON roles.job_title = employees.managaer_id;