
const inquirer = require('inquirer');
const fs = require('fs');
const Choice = require('inquirer/lib/objects/choice');

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
        name: 'projectdescription',
        message: 'Project Description:',
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
      type: 'checkbox',
      name: 'licensebadge',
      message: 'Select a License',
      choices: ["BSD-3-Clause", "(ISC OR GPL-3.0)","UNLICENSED"],
    },
    {
      type: 'input',
      name: 'license',
      message: 'License details',
    },
    
    {
      type: 'input',
      name: 'contributor',
      message: 'Project contributor?',
    },
    {
      type: 'input', 
      name: 'testinfo',
      message: 'Add any testing intructions here',
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
    {
      type: 'input',
      name: 'contact',
      message: 'Personal contact intructions:',
    },

  ])
  .then((data) => {

    const { projectname, projectdescription, installationguide, usageintructions, licensebadge, 
      contributor, githubusername, testinfo, email, phone, contact } = data;
    


    const README = 
    `
# ${ projectname }

## Description

${ projectdescription }

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

## License

License: ${ licensebadge }

## Contributing

- ${ contributor }: https://github.com/${ contributor }

## Tests

${ testinfo }

## Questions

- Github: https://github.com/${ githubusername }
- Email: ${ email }
- Phone: ${ phone }

${ contact }
    `

     fs.writeFile('README.md', README, (err) =>
       err ? console.log(err) : console.log('README Created!')
     );
  });




function init() {}


init();
