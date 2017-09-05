const inquirer = require('inquirer');
const validatePackageName = require('validate-npm-package-name');

var questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What will your plugin be called? e.g. d3-sparkle',
    validate: (value) => {
      const validated = validatePackageName(value);
      if (validated.validForNewPackages) {
        return true;
      }
      return validated.errors.join('/n');
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your plugin (optional)',
    default: ''
  },
  {
    type: 'input',
    name: 'author',
    message: 'Please provide your name (for the LICENCE and package metadata)',
    validate: (value) => {
      if (value.length > 0) {
        return true;
      }
      return 'Please provide a name';
    }
  }
]

module.exports = () => inquirer.prompt(questions);
