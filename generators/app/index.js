'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const formPackFolder = "source";

module.exports = class extends Generator {
	prompting() {
		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the cat\'s meow ' + chalk.red('generator-forma') + ' generator!'
		));

		const prompts = [{

			name: 'frameName',
			message: 'Give a frame to be forma-ed:',
			default: 'default'
		}];

		return this.prompt(prompts).then(props => {
			// To access props later use this.props.someAnswer;
			this.props = props;
		});
	}

	writing() {
		var justCopy = [
			"app.js",
			"config",
			"middlewares",
			"modules",
			"utils",
		];
		var copyWithRender = [
			"package.json",
		];

		var frameName = this.props.frameName;
		var templateValues = {
			frameName: frameName,
		};
		for (var i = 0; i < justCopy.length; i++) {
			var file = justCopy[i];
			this.fs.copy(
				this.templatePath(file),
				this.destinationPath(frameName + "/" + file)
			)
		}
		for (var i = 0; i < copyWithRender.length; i++) {
			var file = copyWithRender[i];
			this.fs.copyTpl(
				this.templatePath(file),
				this.destinationPath(frameName + '/' + file).replace(new RegExp('{{frameName}}', 'g'), frameName),
				templateValues
			);
		}

	}

	install() {

	}

};