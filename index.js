// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
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
      message: "Please enter your installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter your usage information:",
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license from the list below:",
      choices: ["MIT", "Apache", "GNU"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Please enter your contribution guidelines:",
    },
    {
      type: "input",
      name: "test",
      message: "Pleases enter your test instructions:",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your Github username:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email:",
    },
  ]);
};

// Create a function to write genREADME.md
const generateREADME = ({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  test,
  github,
  email,
}) =>
  `# Project title ![license](https://img.shields.io/badge/license-${license}-green)

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  
  ${description}
  
  ## Installation
  
  Please follow the instructions below:
  
  \`\`\`
  ${installation}
  \`\`\`
  
  ## Usage
  
  Please follow the instructions below:
  
  \`\`\`
  ${usage}
  \`\`\`
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  Please follow the instructions below:
  
  \`\`\`
  ${test}
  \`\`\`
  
  ## Contact Me

  #### Visit my Github [here](https://github.com/${github})
  #### Please contact me on my email: ${email}
 
  `;

// Function to initialize app
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) =>
      fs.writeFileSync("genREADME.md", generateREADME(answers))
    )
    .then(() => console.log("Successfully wrote to genREADME.md"))
    .catch((err) => console.error(err));
};

// call init function
init();
