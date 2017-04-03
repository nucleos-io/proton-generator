'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      `Welcome to ${chalk.red('proton')} generator!`
    ));
  }

  writing() {
    const opts = {
      globOptions: {
        dot: true,
        ignore: ['**/.git', '**/CONTRIBUTING.md']
      }
    };
    this.fs.copy(this.templatePath('proton-sample'), this.destinationPath(), opts);
    this.fs.write(this.destinationPath('.env'), '');
  }

  install() {
    this.installDependencies({npm: false, bower: false, yarn: true});
  }
};
