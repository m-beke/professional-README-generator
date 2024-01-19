// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt ([
        {
            type: "input",
            name: "title",
            message: "What is your project name?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a short description of your project:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How can your project be installed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
        },
]);

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
