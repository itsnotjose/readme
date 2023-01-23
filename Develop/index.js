
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')




function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Title of project?',
        validate: titleinput => {
          if (titleinput) {
              return true;
          } else {
              console.log('Please enter your title');
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description of project:',
        validate: descriptioninput => {
          if (descriptioninput) {
              return true;
          } else {
              console.log('Please enter your description of  your project');
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation details',
        validate: installationinput => {
          if (installationinput) {
              return true;
          } else {
              console.log('Please enter installation details');
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Instructions on how to use project',
        validate: usageinput => {
          if(usageinput) {
              return true;
          } else {
              console.log('Please enter instructions on how to use project');
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'license',
        message: 'License for your project (MIT, Apache 2.0, GPL 3.0)',
        validate: licenseinput => {
          if (licenseinput) {
              return true;
          } else {
              console.log('Please enter license');
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to project?',
        validate: contributinginput => {
          if (contributinginput) {
              return true;
          } else {
              console.log('Please enter how can someone contribute to project?');
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Tests for project',
        validate: testsinput => {
          if (testsinput) {
              return true;
          } else {
              console.log('Please enter tests');
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email address',
        validate: emailinput => {
          if (emailinput) {
              return true;
          } else {
              console.log('Please enter email');
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'username',
        message: 'Github username',
        validate: usernameinput => {
          if (usernameinput) {
              return true;
          } else {
              console.log('Please enter username');
              return false;
          }
      }
      }
    ])
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
      if (err) {
          return console.log(err);
      }
      console.log("Checkout README.md file!");
  });
}
console.log("Welcome to the README generater");
init();
