const inquirer = require("inquirer")
const { Manager, Intern, Engineer } = require("./lib/classes")
const { writeHTML, exportHTML } = require("./src/helper")

async function main() {
    const employees = []
    const roles = [
        { name: "Engineer", value: "Engineer" },
        { name: "Intern", value: "Intern" }
    ]
    const questions = [
        {
            type: "input",
            name: "name",
            message: "What is the name of your employee?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of your employee?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of your employee?"
        },
        {
            type: "list",
            name: "role",
            message: "What is the role of your employee?",
            choices: roles
        }
    ]
    const managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number of your manager?"
        }
    ]
    const engineerQuestions = [
        {
            type: "input",
            name: "github",
            message: "What is the github username of your engineer?"
        }
    ]
    const internQuestions = [
        {
            type: "input",
            name: "school",
            message: "What is the school of your intern?"
        }
    ]

    const { name, email, id } = await inquirer.prompt(questions.slice(0, 3))
    const { officeNumber } = await inquirer.prompt(managerQuestions)
    employees.push(new Manager(name, email, id, officeNumber))

    while (true) {
        const { name, email, id, role } = await inquirer.prompt(questions)
        if (role === "Engineer") {
            const { github } = await inquirer.prompt(engineerQuestions)
            employees.push(new Engineer(name, email, id, github))
        } 
        if (role === "Intern") {
            const { school } = await inquirer.prompt(internQuestions)
            employees.push(new Intern(name, email, id, school))
        }
        const { cont } = await inquirer.prompt([
            {
                type: "confirm",
                name: "cont",
                message: "Would you like to add another employee?"
            }
        ])
        if (!cont) break
    }
    employees.forEach(employee => {
        writeHTML(employee)
    })
    exportHTML("./dist/index.html")
}

main()