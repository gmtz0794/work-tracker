INSERT INTO departments (department_name)
VALUES ('HR'), ('Engineering'), ('Sales'), ('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES ('HR Manager', 80000.00, 1),
       ('Software Engineer', 90000.00, 2),
       ('Sales Representative', 60000.00, 3),
       ('Marketing Specialist', 70000.00, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL), 
       ('Alice', 'Smith', 2, 1),  
       ('Bob', 'Johnson', 3, NULL), 
       ('Eva', 'Brown', 4, NULL);