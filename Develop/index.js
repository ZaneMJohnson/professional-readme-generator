// TODO: Include packages needed for this application

// write to a file
const fs = require("fs")

// generate the html

// Ask the user for data
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// ask the user for data
inquirer   
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?", 
            name: "projectTitle",
        },
        {
            type: "input",
            message: "What is a description of the project?",
            name: "projectDescription",
        },
        {
            type: "input",
            message: "What are the installation instructions?",
            name: "projectInstall",
        },
        {
            type: "input",
            message: "What are the usage information?",
            name: "projectUsage"
        },
        {
            type: "input",
            message: "What are the contribution guidelines?",
            name: "projectContribution"
        },
        {
            type: "input",
            message: "What are the instructions for testing?",
            name: "projectTest"
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "npmPog",
            default: "npm i"
        }
    ])
    .then ((answers) => {
        console.log(answers);

        generateMarkdown(answers);
    })

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
