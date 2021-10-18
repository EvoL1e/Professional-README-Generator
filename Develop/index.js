// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')

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

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
