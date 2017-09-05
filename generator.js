const glob = require('glob');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

module.exports = (config) => {

  config.year = new Date().getUTCFullYear();

  const globOptions = {
    cwd: path.resolve(__dirname, './template'),
    dot: true,
    nodir: true
  };

  const files = glob.sync('**/*', globOptions);
  files.forEach((filename) => {
    const templateFilePath = path.resolve(__dirname, './template', filename);
    let templateContents = fs.readFileSync(templateFilePath, 'utf8');

    Object.keys(config).forEach((configProp) => {
      templateContents = templateContents.replace(
        new RegExp('\\$\\{' + configProp +'\\}','g'), config[configProp]);
    });

    const destinationFilePath = path.resolve(process.cwd(), filename);
    mkdirp.sync(path.dirname(destinationFilePath));
    fs.writeFileSync(destinationFilePath, templateContents, 'utf8');
  });
}
