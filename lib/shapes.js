const colors = require('./colors.json');

class Circle {
    constructor(text, textColor, shapeColor) {
        //Exceptions for if the length is invalid
        if(text.length > 3) {
            throw new Error('Logo text must be less than 3 characters long');
        } else if (text.length === 0) {
            throw new Error('Logo text must have at least 1 character')
        }
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>
        `
    }
}

class Triangle {
    constructor(text, textColor, shapeColor) {
        //Exceptions for if the length is invalid
        if(text.length > 3) {
            throw new Error('Logo text must be less than 3 characters long');
        } else if (text.length === 0) {
            throw new Error('Logo text must have at least 1 character')
        }
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="40,180 150,20 260,180" fill="${this.shapeColor}" />
      
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}

class Square {
    constructor(text, textColor, shapeColor) {
        //Exceptions for if the length is invalid
        if(text.length > 3) {
            throw new Error('Logo text must be less than 3 characters long');
        } else if (text.length === 0) {
            throw new Error('Logo text must have at least 1 character')
        }
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 250,0 250,200 50,200" fill="${this.shapeColor}" />
      
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`

    }
}



module.exports = Logo;