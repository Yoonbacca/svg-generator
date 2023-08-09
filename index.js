const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: "Logo Text (up to 3 chars): "
    },
    {
        type: 'input',
        name: 'text-color',
        message: "Logo Text Color (keyword or hexadecimal): "
    },    
    {
        type: 'list',
        name: 'shape',
        message: 'Logo Shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },    
    {
        type: 'input',
        name: 'shape-color',
        message: "Logo Shape Color (keyword or hexadecimal): "
    }, 
];

function init() {
    console.log("Welcome to the Logo Generator! Please follow the prompts below");
    inquirer.prompt(questions).then((answers) => {
        console.log("Thank you!");
        console.log(answers)
    })
}

init();