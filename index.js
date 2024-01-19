// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project name?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const contents = generateMarkdown(data)
    fs.writeFile(fileName, contents, (err)=>{
        if(err) throw err;
    })
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.createPromptModule(questions);
    writeToFile('readme.md', answers);
}

// Function call to initialize app
init();
