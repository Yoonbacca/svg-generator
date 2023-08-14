const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes.js');
const Circle = Shapes.Circle;
const Triangle = Shapes.Triangle; 
const Square = Shapes.Square;

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

function writeToFile(data) { 
    fs.writeFile('./examples/NEWLOGO.svg', data, (err) =>
    err ? console.error(err) : console.log('Success! Check the examples folder for your new logo!')
    );
}

function init() {
    console.log("Welcome to the Logo Generator! Please follow the prompts below");

    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log("Thank you!");
            let finalLogo = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
            if (answers.shape === "Circle") {
                const newCircle = new Circle(answers.text, answers.textColor, answers.shapeColor);
                finalLogo = newCircle.renderStart() + newCircle.render() + newCircle.renderEnd();
                writeToFile(finalLogo);
            } else if (answers.shape === "Triangle") {
                const newTriangle = new Triangle(answers.text, answers.textColor, answers.shapeColor);
                finalLogo = newTriangle.renderStart() + newTriangle.render() + newTriangle.renderEnd();
                writeToFile(finalLogo);
            } else if (answers.shape === "Square") {
                const newSquare = new Square(answers.text, answers.textColor, answers.shapeColor);
                finalLogo = newSquare.renderStart() + newSquare.render() + newSquare.renderEnd();
                writeToFile(finalLogo);
            }

        })
        .catch((error) => console.log(error));
};

init();