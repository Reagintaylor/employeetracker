DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job_title INT ,
  salary DECIMAL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE SET NULL
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (role_id) 
  REFERENCES roles(id) 
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id) 
  REFERENCES employees(id)
  ON DELETE SET NULL
);