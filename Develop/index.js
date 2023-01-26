const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require("./lib/Manager")
const Inter = require("./lib/Intern")


const fillFormManager = ()=>{
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "what is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "what is your ID?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },
    {
        type: "input",
        name: "officenumber",
        message: "what is your office number?"
    },
    {
        type:"list",
        name:"position",
        message:"Please choose the member you want to enter the information for",
        choices:["Engineer","Intern"]
    }

]).then((data) => {
    const addManager = new Manager(data.name,data.id,data.email,data.officenumber)
    console.log(addManager)
    // if(data.position === "Engineer")
})
}

fillFormManager();