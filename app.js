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

const addDept = async (deptInfo) => {
    
}

const addDeptInfo = async () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the new Department?",
            name: "deptName"
        }
    ])
}

const getManagerNames = async () => {

}

const getRoles = async () => {

}

const getDeptNames = async () => {

}

const getDeptId = async () => {

}

const getRoleId = async () => {

}

const getEmId = async () => {

}

const getEmNames = async () => {

}

const viewAllRoles = async () => {

}

const viewAllDepts = async () => {

}

const viewAllEmployees = async () => {

}

const viewAllByDept = async () => {

}

const getFirstAndLast = async (fullName) => {

}

const updateEmRole = async (emInfo) => {

}

const addEm = async (emInfo) => {

}

const removeEmployee = async (emInfo) => {

}

const addRole = async (roleInfo) => {

}

const mainPrompt = async () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: [
                "Add Department", 
                "Add Employee", // 
                "Add Role", // 
                "Remove Employee", // 
                "Update Employee Role", // 
                "View All Departments", // done
                "View All Employees", // done
                "View All Employees by Department", // done
                "View All Roles", // done
                "Exit" // done
            ]
        }
    ])
}

const getAddEmInfo = async () {
    
}

const init = async () => {
    let quit = false;
    while(!quit) {
        const prompt = await mainPrompt()

        switch (prompt.action) {
            case 'Add Department': {

            }
            case 'Add Employee': {

            }
            case 'Add Role': {

            }
            case 'Remove Employee': {
                
            }
            case 'Update Employee Role': {
                
            }
            case 'View All Departments': {
                
            }
            case 'View All Employees': {
                
            }
            case 'View All Employees by Department': {
                
            }
            case 'View All Roles': {

            }
            case 'Exit': {
                quit = true;
                process.exit(0)
            }
            default: console.log("There was an error! Please try again!")
        }
    }
}

process.on("exit", async function(code) {
    await con.close()
    return console.log(`Exiting With Code: ${code}`)
})

init()