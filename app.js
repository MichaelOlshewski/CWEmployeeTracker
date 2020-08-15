const inquirer = require('inquirer')
const Database = require('./database_files/Database')
const conTable = require('console.table')

const database = new Database({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "MOlsh2017",
    database: "employee_db"
})

const mainPrompt = async () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: [
                "Add department",
                "Add employee",
                "Add role",
                "Remove employee",
                "Update employee role",
                "View all departments",
                "View all employees",
                "View all employees by department",
                "View all roles",
                "Exit"
            ]
        }
    ])
}

const init = async () => {
    let quit = false;
    while(!quit) {
        const prompt = await mainPrompt()

        switch (prompt.action) {
            case 'Add Department': {
                const newDeptName = await getDeptInfo()
                await addDeptment(newDeptName)
                break
            }
            case 'Add Employee': {
                const newEmployee = await addEmployeeInfo()
                console.log("add an employee")
                console.log(newEmployee)
                await addEmployee(newEmployee)
                break
            }
            case 'Add Role': {
                const newRole = await roleInfo()
                console.log("add a role")
                await addRole(newRole)
                break
            }
            case 'Remove Employee': {
                const em = await removeEmployeeInfo()
                await removeEmployee(em)
                break
            }
            case 'Update Employee Role': {
                const em = await updateEmployeeRole()
                await updateEmployee(em)
            }
            case 'View All Departments': {
                await viewAllDepts()
                break
            }
            case 'View All Employees by Department': {
                await viewAllEmployees()
                break
            }
            case 'View All Roles': {
                await viewAllRoles()
                break
            }
            case 'Exit': {
                quit = true;
                process.exit(0)
            }
            default: console.log("There was an error! Please try again!")
        }
    }
}

const viewAllRows = async () => {

}




process.on("exit", async function(code) {
    await con.close()
    return console.log(`Exiting With Code: ${code}`)
})

init()