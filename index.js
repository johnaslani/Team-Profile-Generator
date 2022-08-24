// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
// const inquirer = require("inquirer");
// const fs = require("fs");

const Manager = require("./lib/Manager");

import { generateMarkdown } from "./utils/generateMarkdown.js";
//import { generateMarkdown } from "./utils/generateMarkdown";

// let role == "manager"
const questionsManager = [
  {
    type: "input",
    name: "office",
    message: `What is the office number?`,
  },
];

// TODO: Create an array of questions for user input
const questionsGeneral = [
  {
    type: "input",
    name: "name",
    message: `What is employee's name?`,
  },
  {
    type: "input",
    name: "employeeID",
    message: `Where is employee's employee ID?`,
  },
  {
    type: "input",
    name: "email",
    message: `What is employee's email address?`,
  },
];

const questionMenu = [
  {
    type: "input",
    name: "role",
    message: `What is the role of the employee?`,
  },
];
// const questionSpecial = [
//     switch (${role}){
//         case manager:
//             {
//             type: "input",
//             name: "office",
//             message: `What is the office number?`,
//             };
//             break;
//         case engineer:
//             {
//             type: "input",
//             name: "GitHub",
//             message: `Where is the GitHub username?`,
//             };
//             break;
//         case intern:
//             {
//             type: "input",
//             name: "school",
//             message:
//                 `What is the school name?`,
//             },
//   ];

// questions = questionsGeneral + questionSpecial,

const team = [];

function promptManager() {
  inquirer.prompt(questionsGeneral).then((answersGeneral) => {
    inquirer.prompt(questionsManager).then((answerManager) => {
      const manager = new Manager(
        answersGeneral.name,
        answersGeneral.employeeID,
        answersGeneral.email,
        answerManager.office
      );
      team.push(manager);
      promptMenu();
    });
  });
}

function promptMenu() {
  inquirer.prompt(questionMenu).then((answerMenu) => {
    switch (answerMenu.role) {
      case "finish":
        generateHTML();
        break;
      case "engineer":
        promtEngineer();
        break;
      case "intern":
        promtIntern();
        break;
    }
  });
}

function promtEngineer() {}

function promtIntern() {}

// const template = require("./template.js")

// const generateMarkdown = ({
//   title,
//   description,
//   installation,
//   usage,
//   contributing,
//   tests,
//   license,
//   github,
//   email,
// }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

//To generate employee Cards

// To generate HTML page

// TODO: Create a function to write README file
function writeToFileSync(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(questions).then((answers) => {
//     const htmlCardContent = generateHTML(answers);
//     console.log(htmlCardContent);
//     fs.writeFileSync("Team.html", htmlPageContent, (err) =>
//       err ? console.log(err) : console.log("Successfully created Team.html!")
//     );
//   });
// }

promptManager();

// Function call to initialize app
// init();
