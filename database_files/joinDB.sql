SELECT employee.id, employee.first_name AS "First Name", employee.last_name AS "Last Name", role.title, department.name AS "Department", role.salary AS "Salary", CONCAT(manager.first_name," ",manager.last_name) AS "Manager"
FROM employee 
LEFT JOIN role 
ON role.id = employee.role_id 
LEFT JOIN department  
ON department.id = role.department_id
LEFT JOIN employee manager ON manager.id = employee.manager_id
ORDER BY employee.id;