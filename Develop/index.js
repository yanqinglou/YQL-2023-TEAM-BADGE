const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require("./lib/Manager")
const Inter = require("./lib/Intern")
const generateHTML = require("./util/generateHtml")
const Intern = require("./lib/Intern")


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
    const manager = new Manager(data.name,data.id,data.email,data.officenumber)
    // console.log(manager)
    if(data.position === "Engineer"){
        fillFormEngineer();
    }else {
        fillFormIntern();
    }
})
}

const fillFormEngineer =()=> {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "what is the engineer's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "what is the engineer's email?"
        },
        {
            type: "input",
            name: "githubname",
            message: "what is the engineer's github username?"
        }
    ]).then((data) => {
        const engineer = new Engineer(data.name,data.id,data.email,data.githubname)
        toContinue()
        // console.log(engineer)
})
}

const fillFormIntern =()=> {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "what is the intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "what is intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "which school is the intern in?"
        }
    ]).then((data) => {
        const intern = new Intern(data.name,data.id,data.email,data.school)
        toContinue();
        // console.log(intern)
})
}

const toContinue = ()=>{
    inquirer.prompt([
    {
        type:"list",
        name:"position",
        message:"Please choose the member you want to enter the information for or finishing building the team",
        choices:["Engineer","Intern","Exit"]
    },
]).then((data) => {
    if(data.position === "Engineer"){
        fillFormEngineer();
    }else if(data.position ==="Intern") {
        fillFormIntern();
    }else{
        generateHTML.generateTeam()
    }

})
}

fillFormManager();