const inquirer = require('./inquirer');
const generator = require('./generator');
const exec = require('child_process').exec;

inquirer()
  .then(answers => {
    generator(answers)
    if (answers.npmInstall) {
      exec('npm install', () => {
        exec('npm test');
      });
    }
  });
