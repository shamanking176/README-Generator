// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None'){
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `##License
        
        This project is licensed under the ${license} license.`;
    }
}

// TODO: Create a function to generate markdown for README


function generateMarkdown(answers) {
  return `
  # ${answers.title}
## Table of Content
-[Project description](#Usage)
-[Usage](#Usage)
-[Contributing](#Contributing)
-[Installation](#Installation)
-[Questions](#Questions)
-[License](#License)

## Description
${answers.description}
## Usage
${answers.usage}
## Installtion
${answers.installation}
## Contributiing
${answers.contributing}
## Questions
${answers.email}
${answers.github}
## License
${answers.license}

`;
}

module.exports = generateMarkdown;