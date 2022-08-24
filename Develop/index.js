// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Provide a short description of your project",
  },
  {
    type: "input",
    name: "Installation",
    message: "What are the steps required to install this project?",
  },
  {
    type: "list",
    name: "License",
    message: "Which license do you want to use?",
    choices: ["Mozilla", "Apache", "IBM", "MIT"],
  },
  {
    type: "input",
    name: "Usage",
    message: "What is the usage for this application",
  },
  {
    type: "input",
    name: "Contributing",
    message: "List all contributors",
  },
  {
    type: "input",
    name: "Tests",
    message: "Write out any tests you'd like to offer",
  },
  {
    type: "input",
    name: "Github",
    message: "Enter your Github Username",
  },
  {
    type: "input",
    name: "Email",
    message: "Enter your email address",
  },
  {
    type: "input",
    name: "Questions",
    message: "Enter any questions",
  },
];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app

  inquirer
    .prompt(questions)
    .then((answers) => {
        const addData = makeReadMe(answers)
      console.log(answers);
      fs.writeFile("README.md", addData, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
      )
    })
    .catch((err) => {
      console.log(err);
    });

// Function call to initialize app
function makeReadMe(answers){
return `
# README Generator

### Creates a README doc from the command line

## Table of Conents
**[Usage](#Usage)**<br>
**[Installation](#Installation)**<br>
**[Contributors](#Contributors)**<br>
**[Questions](#Questions)**<br>

## Usage
${answers.Usage}

## Installation
${answers.Installation}

## Contributors
${answers.Contributing}


## Questions
${answers.Questions}
`
};