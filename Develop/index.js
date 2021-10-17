// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = ["What is your project's name?", 
"What would you like to add to the description of your project?",
"Would you like a table of contents?",
"What are the steps required for someone to install your project?",
"What are some use cases and examples of your project?",
"If there are any, who helped you in the creation of your project, who were they?",
"Which License would you like to use for your project?",
"How can someone contribute to your project?",
"How can someone else run a test of your project?",
"What is your GitHub link?",
"What is your email?",
"What is your first and last name?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
