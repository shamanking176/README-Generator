// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./lib/generatemarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    name:'title',
    message:"Enter project title",
},
{
    type:'input',
    name:'description',
    message:'Enter a description',
},
{
    type:'input',
    name:'installation',
    message:'Enter installation instructions',
},
{
    type:'input',
    name:'usage',
    message:'Enter usage information',
},
{
    type:'input',
    name:'contribution',
    message:'Enter contribution guidelines',
},
{
    type:'input',
    name:'test instructions',
    message:'Enter test instructions',
},
{
    type:'input',
    name:'email',
    message:'Enter email for questions',
},
{
    type:'input',
    name:'github',
    message:'Enter github for questions',
},
{
    type:'list',
    name:'license',
    message:'Choose license',
    choices:['mit','isc','apache'],
},]
    ;

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), answers)
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) =>{
        writeToFile('README.md', generateMarkdown({...answers}))
        

})
}




// Function call to initialize app
init();
