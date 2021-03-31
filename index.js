// TODO: Include packages needed for this application - done
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'githubusername',
      message: 'Github username:',
    },
    {
        type: 'input',
        name: 'projectname',
        message: 'Exact Project Name:',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'Project Motivation:',
    },

    {
        type: 'input',
        name: 'why',
        message: 'Why did you creat this project?',
    },

    {
        type: 'input',
        name: 'problemsolved',
        message: 'What problem did you solve?',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'installationguide',
      message: 'How to install:',
    },
    {
      type: 'input',
      name: 'usageintructions',
      message: 'How to use:',
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'Screenshot path:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'License details',
    },
    {
      type: 'input',
      name: 'contributor1',
      message: 'Project contributor? (1/4)',
    },
    {
      type: 'input',
      name: 'contributor2',
      message: 'Project contributor? (2/4)',
    },
    {
      type: 'input',
      name: 'contributor3',
      message: 'Project contributor? (3/4)',
    },
    {
      type: 'input',
      name: 'contributor4',
      message: 'Project contributor? (4/4)',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Your email:',
    },
    {
      type: 'input',
      name: 'phone',
      message: 'Your phone:',
    },

  ])
  .then((data) => {

    const { projectname, motivation, why, problemsolved, learn, installationguide,
    usageintructions, screenshot, license, contributor1, contributor2, contributor3, 
    contributor4, githubusername, email, phone } = data;

    const README = 
    `
# ${ projectname }

## Description

My motivation: ${ motivation }
Why I built Tts: ${ why }
The Problem(s) it solves: ${ problemsolved }
What I learned: ${ learn }

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

How to install: ${ installationguide }

## Usage

How to use: ${ usageintructions }

URL: (https://github.com/${ githubusername }/${ projectname })

![alt text](${ screenshot })

## License

License: ${ license }

## Contributing

- ${ contributor1 }: https://github.com/${ contributor1 }
- ${ contributor2 }: https://github.com/${ contributor2 }
- ${ contributor3 }: https://github.com/${ contributor3 }
- ${ contributor4 }: https://github.com/${ contributor4 }

## Tests

## Questions

- Github: https://github.com/${ githubusername }
- Email: ${ email }
- Phone: ${ phone }
    `

     fs.writeFile('README.md', README, (err) =>
       err ? console.log(err) : console.log('Success!')
     );
  });



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
