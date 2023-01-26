const inquirer = require("inquirer")    
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "what is your name?"
    }
]).then ((response)=>{
    console.log(response)
    return 'abcde'
}).then ((takedata)=>{
    console.log(takedata)
}
)