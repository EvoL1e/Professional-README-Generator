// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = ["What is your project's name?", // Project Title
"What would you like to add to the description of your project?", // Project Description
"Would you like a table of contents?", // Table of contents
"What are the steps required for someone to install your project?", // Install
"What are some use cases and examples of your project?", // Usage
"If there are any, who helped you in the creation of your project, who were they?", // Credits
"Which License would you like to use for your project?", // License
"How can someone contribute to your project and what are the guidelines?", //Contribution Guidelines
"How can someone else run a test of your project?", // Test
"What is your GitHub link?", // Questions
"What is your email?", // Questions
"What is your first and last name?", // License
"What is the current year?"]; // License

// TODO: Make a function that will prompt the user
function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your projects name?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What would you like to add to the description of your project?',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are the steps required for someone to install your project?',
                name: 'install',
            },
            {
                type: 'input',
                message: 'What are some use cases and examples of your project?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'If there are any, who helped you in the creation of your project, who were they?',
                name: 'credits',
            },
            {
                type: 'list',
                message: 'Which License would you like to use for your project?',
                name: 'license',
                choices: ['Apache License 2.0', 'GNU GPLv2', 'GNU GPLv3', 'MIT', 'ISC'],
            },
            {
                type: 'input',
                message: 'How can someone contribute to your project and what are the guidelines?',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'How can someone else run a test of your project?',
                name: 'test',
            },
            {
                type: 'input',
                message: 'What is your GitHub link?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your first and last name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the current year?',
                name: 'year',
            },
        ])
        .then((data => {
            writeToFile("README.md", data);
        }))
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Generating README.md 
    fs.writeFile(fileName, generateMarkdown(data), () =>
     console.log('README file created!'));
}

// TODO: Create a function to initialize app
function init() {
    // Set up required variables
    //let fileName = "README.md";

    // Initializes the functions that will help generate the README file
    promptUser();
    //writeToFile(fileName, userData);
}

// Function call to initialize app
init();
