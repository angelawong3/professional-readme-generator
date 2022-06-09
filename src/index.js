// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


License
Please select a license from the list below: 
MIT
Apache
…

Contributing
Please enter your contribution guidelines: 

Tests
Pleases enter tour test instructions: 

Questions
Please enter your GitHub username: 
https://github.com/angelawong3

Please enter your email address: 
// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter your project description:",
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter your installation instructions (If any):",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter your usage information (If any):",
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license from the list below:",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
    },
  ]);
};

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// Use writeFileSync method to use promises instead of a callback function

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync("index.html", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
};

init();
