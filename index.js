// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

// let role == "manager"
const questionsManager = [
  {
    type: "input",
    name: "office",
    message: `What is the office number?`,
  },
];

const questionsEngineer = [
  {
    type: "input",
    name: "github",
    message: `What is the GitHub username?`,
  },
];

const questionsIntern = [
  {
    type: "input",
    name: "school",
    message: `What is the schoole name?`,
  },
];

// Create an array of questions for user input
const questionsGeneral = [
  {
    type: "input",
    name: "name",
    message: `What is employee's name?`,
  },
  {
    type: "input",
    name: "employeeID",
    message: `What is employee's ID?`,
  },
  {
    type: "input",
    name: "email",
    message: `What is employee's email address?`,
  },
];

const questionMenu = [
  {
    type: "list",
    name: "role",
    message: `What do you want to do next?`,
    // message: `What is the role of the employee?`,
    choices: ["Add Intenrn", "Add Engineer", "Finish"],
  },
];

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
      case "Finish":
        writeToFileSync();
        break;
      case "Add Engineer":
        promtEngineer();
        break;
      case "Add Intenrn":
        promtIntern();
        break;
    }
  });
}

function promtEngineer() {
  inquirer.prompt(questionsGeneral).then((answersGeneral) => {
    inquirer.prompt(questionsEngineer).then((answerEngineer) => {
      const engineer = new Engineer(
        answersGeneral.name,
        answersGeneral.employeeID,
        answersGeneral.email,
        answerEngineer.github
      );
      team.push(engineer);
      promptMenu();
    });
  });
}

function promtIntern() {
  inquirer.prompt(questionsGeneral).then((answersGeneral) => {
    inquirer.prompt(questionsIntern).then((answerIntern) => {
      const intern = new Intern(
        answersGeneral.name,
        answersGeneral.employeeID,
        answersGeneral.email,
        answerIntern.school
      );
      team.push(intern);
      promptMenu();
    });
  });
}

// Create a function to write README file
function writeToFileSync() {
  fs.writeFileSync(
    "./dist/team.html",
    generateHTML(team),

    (err) =>
      err ? console.log(err) : console.log("Successfully created Team.html!")
  );
}

promptManager();
