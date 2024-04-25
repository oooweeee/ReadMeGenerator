// TODO: Include packages needed for this application
const fs = require("fs");
const colors = require("colors");
const path = require("path");
const inquirer = require("inquirer");
const { type } = require("os");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  //ask the question
  inquirer.prompt(questions).then((answers) => {
    //pass the answer to the big string
    const string = generateMarkdown(answers);
    //
    FileSystem.writefile("readme.md", string);
  });
}

// Function call to initialize app
init();
