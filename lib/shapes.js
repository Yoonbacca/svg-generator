const colors = require('./colors.json');

class Logo {
    constructor(text, textColor, shapeColor) {
        if(text.length > 3) {
            throw new Error('Logo text must be less than 3 characters long');
        } else if (text.length === 0) {
            throw new Error('Logo text must have at least 1 character')
        }

        this.validateColor(textColor);
        this.validateColor(shapeColor);
    
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    validateHex(hexColor, shorthand) {
        // If shorthand true, then it'll equal first cond, e.g. "#ABC"
        const hexColorPattern = shorthand ? /^#[0-9A-Fa-f]{3}$/ : /^#[0-9A-Fa-f]{6}$/;

        if (!hexColorPattern.test(hexColor)) {
            throw new Error('Invalid hex color code');
        }
    }

    validateColor(color) {
        // Hexadecimal Validation
        if (color.startsWith("#")) {
            let hexColorPattern;

            if (color.length === 4) {
                this.validateHex(color, true);
            } else if (color.length === 7) {
                this.validateHex(color, false);
            } else {
                throw new Error('Invalid hex color code length');
            }
        
        } else if (!colors.hasOwnProperty(color)) {
            throw new Error('Invalid color keyword');
        }
    }
 }



class Circle extends Logo {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>
        `
    }
}

class Triangle extends Logo {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="40,180 150,20 260,180" fill="${this.shapeColor}" />
      
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}

class Square extends Logo {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 250,0 250,200 50,200" fill="${this.shapeColor}" />
      
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`

    }
}

module.exports = {Logo,Circle,Triangle,Square};