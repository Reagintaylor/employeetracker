SELECT *
FROM employee_db
JOIN roles ON departments.id = roles.role_id;

SELECT *
FROM employee_db
JOIN employees ON roles.job_title = employees.employee_id;