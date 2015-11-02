var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);

    // Add command line arguments here
    //this.argument('appname', { type: String, required: true });

    // Add command line options here
    // this.option('scss'); // If you include --scss in the command line, the generator can use this.options.scss to do stuff (returns true/false)
  },


  // Call via: this._privateMethod();
  // _privateMethod: function(text) {
  //   console.log(text);
  // },

  initializing: {},

  prompting: function() {
    //var done = this.async();
    //
    //this.prompt([{
    //    type    : 'input',
    //    name    : 'appname',
    //    message : 'Your project name',
    //    default : this.appname // Default to current folder name
    //  }, {
    //    type    : 'input',
    //    name    : 'username',
    //    message : 'What\'s your Github username',
    //    store   : true // Remembers the last thing the user entered for this question
    //  }, {
    //    type    : 'list',
    //    name    : 'preprocessor',
    //    message : 'Do you want to use a CSS preprocessor?',
    //    choices: [
    //      "LESS",
    //      "Stylus",
    //      "SCSS",
    //      "None"
    //    ]
    //  }], function (answers) {
    //    this.log(answers.appname); // this = generator
    //    this.log(answers.username);
    //    this.log(answers.preprocessor);
    //
    //    // Way to confirm if all of the settings are correct
    //    this.prompt([{
    //        type    : 'confirm',
    //        name    : 'confirmation',
    //        message : 'Does this all look good?'
    //      }], function (answers) {
    //        if (!answers.confirmation) {
    //          this.log("You said NO!" + answers.confirmation);
    //        } else {
    //          this.log("You said YES!" + answers.confirmation);
    //        }
    //
    //        done();
    //    }.bind(this));
    //}.bind(this)); // Binds the generator to the above 'this'
  },

  configuring: {},

  default: {},

  writing: function () {

    //this.fs.copyTpl(
    //  this.templatePath('index.html'),
    //  this.destinationPath('./index.html'),
    //  { title: 'Templating with Yeoman' }
    //);

  },

  conflicts: {},

  install: function () {
    // Installs npm
    //this.npmInstall();

    // Installs Bower
    //this.bowerInstall();

    // Installs both Bower and npm
    //this.installDependencies();

    // Bower requires bower.json with appropriate information
    // npm requires package.json with appropriate information

  },

  end: function () {
    console.log('END');
  }

});
