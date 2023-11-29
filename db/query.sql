SELECT
  employees.id AS employee_id,
  employees.first_name,
  employees.last_name,
  roles.title AS job_title,
  departments.department_name
FROM employees
LEFT JOIN roles ON employees.role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id
ORDER BY employee_id;