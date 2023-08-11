const colors = require('colors.json');

class Logo { 
    constructor(text, textColor, shape, shapeColor) {

        if(text.length > 3) {
            throw new Error('Logo text must be less than 3 characters long');
        } else if (text.length === 0) {
            throw new Error('Logo text must have at least 1 character')
        }

        //Regex for only allowing uppercase, lowercase, and symbols
        const pattern = new RegExp('([A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~=-]+$)');
        if (!pattern.test(authorName)) {
            throw new Error(
              'Logo text must only contain letters, numbers, and symbols.'
            );
          }

        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

module.exports = Logo;