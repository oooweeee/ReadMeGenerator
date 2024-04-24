// TODO: Include packages needed for this application
const fs = require('fs');
const colors = require('colors');
const path = require('path');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "what is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "what is your email adress?",
  },
  {
    type: "input",
    name: "",
    message: "",
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
