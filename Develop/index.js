// TODO: Include packages needed for this application

// write to a file
const fs = require("fs")

// generate the html

// Ask the user for data
const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
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
        message: "What are the installation instructions? Provide a step-by-step description of how to get the development environment running.",
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
        message: "What is your Github username?",
        name: "projectUsername"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "projectEmail"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "projectLicense",
    },
    
];

function askQuestions() {
    inquirer   
        .prompt(questions)
        .then ((answers) => {
            console.log(answers);
            const markdown = generateMarkdown(answers);
            writeToFile(markdown);
        })
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./output/outputREADME.md", data, (err) => err ? console.error(err) : console.log("Success"))
}

// TODO: 
function init() {
    askQuestions();
}

init();