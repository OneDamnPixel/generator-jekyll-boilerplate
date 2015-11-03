var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  initializing: function() {
    this.props = {}
  },

  prompting: function() {
    var done = this.async();

    var prompts = [{
      name: 'projectName',
      message: 'Project name:',
      default : 'jekyll-boilerplate'
    }, {
      name: 'projectDescription',
      message: 'Project description:'
    }, {
      name: 'projectURL',
      message: 'Project URL:'
    }, {
      name: 'authorName',
      message: 'Author name:',
      store: true
    }, {
      name: 'authorEmail',
      message: 'Author email:',
      store: true
    }, {
      name: 'authorURI',
      message: 'Author website:',
      store: true
    }, {
      name: 'authorBio',
      message: 'Author bio:',
      store: true
    }, {
      name: 'authorTwitter',
      message: 'Author Twitter username:',
      store: true
    }, {
      name: 'authorGithub',
      message: 'Author GitHub username:',
      store: true
    }];

    this.prompt(prompts, function(props) {
      this.props = _.assign(this.props, props);
      done();
    }.bind(this));
  },

  configuring: {},

  default: {},

  writing: function() {
    var destinationPathRoot = this.props.projectName.replace(/\s+/g, '-').toLowerCase();

    mkdirp(destinationPathRoot + '/_posts');
    mkdirp(destinationPathRoot + '/_sass');
    mkdirp(destinationPathRoot + '/css');

    // Includes
    this.fs.copyTpl(
      this.templatePath('_includes/head.html'),
      this.destinationPath(destinationPathRoot + '/_includes/head.html'),
      {}
    );



    // Layouts
    this.fs.copyTpl(
      this.templatePath('_layouts/default.html'),
      this.destinationPath(destinationPathRoot + '/_layouts/default.html'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('_layouts/page.html'),
      this.destinationPath(destinationPathRoot + '/_layouts/page.html'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('_layouts/page.html'),
      this.destinationPath(destinationPathRoot + '/_layouts/page.html'),
      {}
    );



    // Posts
    this.fs.copyTpl(
      this.templatePath('_layouts/default.html'),
      this.destinationPath(destinationPathRoot + '/_layouts/default.html'),
      {}
    );



    // Root
    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath(destinationPathRoot + '/.gitignore'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('_config.yml'),
      this.destinationPath(destinationPathRoot + '/_config.yml'),
      {
        projectName: this.props.projectName,
        projectDescription: this.props.projectDescription,
        projectURL: this.props.projectURL,
        authorName: this.props.authorName,
        authorEmail: this.props.authorEmail,
        authorURI: this.props.authorURI,
        authorBio: this.props.authorBio,
        authorTwitter: this.props.authorTwitter,
        authorGithub: this.props.authorGithub
      }
    );

    this.fs.copyTpl(
      this.templatePath('feed.xml'),
      this.destinationPath(destinationPathRoot + '/feed.xml'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath(destinationPathRoot + '/index.html'),
      {}
    );
  },

  conflicts: {},

  install: function() {},

  end: function() {}
});
