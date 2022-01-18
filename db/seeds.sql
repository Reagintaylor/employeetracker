INSERT INTO departments (name)
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

INSERT INTO employees (id, first_name, last_name, manager_id)
VALUES (2, "Reagin", "Turner", 1),
       (3, "Paris", "Coleman", 2),
       (4, "Kelsey", "Perkins", 3),
       (5, "Leci", "Reid", 4),
       (6, "Sharrone", "Bryant", 5),
       (7, "Kalena", "Marshall", 6),
       (8, "Robbin", "Gleaton", 7);