const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: "Logo Text (up to 3 chars): "
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Logo Shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'textColor',
        message: `Logo Text Color (Keyword or Hex): `
    },        
    {
        type: 'input',
        name: 'shapeColor',
        message: `Logo Shape Color (Keyword or Hex): `
    }, 
];

function init() {
    console.log("Welcome to the Logo Generator! Please follow the prompts below");

    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log("Thank you!");
            const newLogo = new Logo(
                answers.text,
                answers.textColor,
                answers.shape,
                answers.shapeColor
            );
            console.log(newLogo);
        });

};

init();