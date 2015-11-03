var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);

    // Add command line arguments here

    // Uncomment this and Yeoman will allow for a blank name (allows you to use the current working directory)
    //this.argument('appname', {
    //  desc: 'The applications name. Cannot be blank.',
    //  required: false,
    //  type: String
    //});

    // Add command line options here
    // this.option('scss'); // If you include --scss in the command line, the generator can use this.options.scss to do stuff (returns true/false)
  },


  // Call via: this._privateMethod();
  // _privateMethod: function(text) {
  //   console.log(text);
  // },

  initializing: {},

  prompting: function() {
    var done = this.async();

    this.prompt({
      type    : 'input',
      name    : 'appname',
      message : 'Your project name',
      default : 'jekyll-boilerplate'
    }, function (answers) {
      this.appname = answers.appname.replace(/\s+/g, '-').toLowerCase(); // Convert to lower case and dash separated name
      done();
    }.bind(this));
  },

  configuring: {},

  default: {},

  writing: function () {

    mkdirp('./' + this.appname + '/_posts');
    mkdirp('./' + this.appname + '/_sass');
    mkdirp('./' + this.appname + '/css');

    // Includes
    this.fs.copyTpl(
      this.templatePath('_includes/head.html'),
      this.destinationPath('./' + this.appname + '/_includes/head.html'),
      {}
    );



    // Layouts
    this.fs.copyTpl(
      this.templatePath('_layouts/default.html'),
      this.destinationPath('./' + this.appname + '/_layouts/default.html'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('_layouts/page.html'),
      this.destinationPath('./' + this.appname + '/_layouts/page.html'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('_layouts/page.html'),
      this.destinationPath('./' + this.appname + '/_layouts/page.html'),
      {}
    );



    // Posts
    this.fs.copyTpl(
      this.templatePath('_layouts/default.html'),
      this.destinationPath('./' + this.appname + '/_layouts/default.html'),
      {}
    );



    // Root
    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('./' + this.appname + '/.gitignore'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('_config.yml'),
      this.destinationPath('./' + this.appname + '/_config.yml'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('feed.xml'),
      this.destinationPath('./' + this.appname + '/feed.xml'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('./' + this.appname + '/index.html'),
      {}
    );

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

  end: function () {}

});
