INSERT INTO departments (department_name)
VALUES ("General Management"),
       ("Marketing"),
       ("Operations"),
       ("Finance"),
       ("Sales"),
       ("Human Resources"),
       ("Accounting");

INSERT INTO roles (id, job_title, salary)
VALUES (3, "Accounting manager", 40000),
       (4, "Sales manager", 50000),
       (5, "Accountant", 55000),
       (6, "Head of Operations", 70000),
       (7, "Makreting Analyst", 650000),
       (8, "Manager", 670000),
       (9, "Sales Associate", 40000);

INSERT INTO employees (id, first_names, last_names, salary, manager)
VALUES (2, "Reagin", "Turner", 1, 'Bob'),
       (3, "Paris", "Coleman", 3, 'Bob'),
       (4, "Kelsey", "Perkins", 5, 'Joe'),
       (5, "Leci", "Reid", 1, 'Sally'),
       (6, "Sharrone", "Bryant", 2, 'Jessica'),
       (7, "Kalena", "Marshall", 4, 'Gina'),
       (8, "Robbin", "Gleaton", 1, 'Fred');