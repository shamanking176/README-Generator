// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
    const badges ={
        mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    return badges[license];
    
    
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    
    const licenselinks={
        mit: '[MIT](https://choosealicense.com/licenses/mit/)',
        isc: '[ISC](https://choosealicense.com/licenses/isc/)',
        apache: '[Apache](https://choosealicense.com/licenses/apache/)'
    }
    return licenselinks[license]
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   
    if (license){
        return `This project is licensed under the ${renderLicenseLink(license)} license.`
    }
    else{
        return ``;
    }
}

// TODO: Create a function to generate markdown for README


function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

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
${renderLicenseSection(answers.license)}

`;
}

module.exports = generateMarkdown;