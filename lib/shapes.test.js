const Shapes = require('./shapes.js');
const Circle = Shapes.Circle;
const Triangle = Shapes.Triangle; 
const Square = Shapes.Square;

describe('Shapes', () => {
    describe('Text Length', () => {
        it('should throw an error if given more than 3 characters', () => {
            const badString = 'ab12';
            const result = new Circle(badString, 'green', 'blue');

            expect(result).toEqual(false);
        });
    });
    describe('Text Color', () => {
        it('should throw an error if given an invalid color keyword', () => {
            const badString = 'lightestgreen';
            const result = new Circle('abc', badString, 'blue');

            expect(result).toEqual(false);
        });

        it('should throw an error if given an invalid hexadecimal', () => {
            const badString = 'lightestgreen';
            const result = new Circle('abc', badString, 'blue');

            expect(result).toEqual(false);
        });
    });
    describe('Shape Color', () => {
        it('should throw an error if given an invalid color keyword', () => {
            const badString = 'lightestgreen';
            const result = new Circle('abc', 'green', badString);

            expect(result).toEqual(false);
        });

        it('should throw an error if given an invalid hexadecimal', () => {
            const badString = 'lightestgreen';
            const result = new Circle('abc', 'green', badString);

            expect(result).toEqual(false);
        });
    });
    describe('Logo Start', () => {
        it('should should render the start of the svg file consistently ', () => {
            const shape = new Logo()
            expect(shape.renderStart()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            `);
        });
        it('should should render the end of the svg file consistently ', () => {
            const shape = new Logo()
            expect(shape.renderEnd()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`);
        });
    });
    describe('Circle', () => {
        it('should should render a ', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });

    describe('Triangle', () => {
        it('should throw an error if given an invalid color keyword', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="40,180 150,20 260,180" fill="blue" />');
        });
    });
    describe('Square', () => {
        it('should throw an error if given an invalid color keyword', () => {
            const badString = 'lightestgreen';
            const result = new Circle('abc', 'green', badString);
            expect(shape.render()).toEqual('<polygon points="50,0 250,0 250,200 50,200" fill="blue" />');
        });
    });
});