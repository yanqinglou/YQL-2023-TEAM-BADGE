const inquirer = require("inquirer")
const fs = require("fs")

const fillForm = ()=>{
    inquirer.prompt([
    {
        typetype: "input",
        name: "managername",
        message: "what is the manager's name?"
    },
    {
        typetype: "input",
        name: "managerid",
        message: "what is the manager's ID?"
    },
    {
        typetype: "input",
        name: "managerid",
        message: "what is the manager's ID?"
    },

])
} 