DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles(
  job_title INT NOT NULL PRIMARY KEY,
  role_id INT NOT NULL AUTO_INCREMENT,
--   department VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES departments(id)
  ON DELETE SET NULL
);

CREATE TABLE employees(
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_names VARCHAR(30) NOT NULL,
  last_names VARCHAR(30) NOT NULL,
--   job_titles VARCHAR(30) NOT NULL,
--   department VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  manager VARCHAR(30) NOT NULL,
  FOREIGN KEY (employee_id)
  REFERENCES roles(role_id)
  ON DELETE SET NULL
);
