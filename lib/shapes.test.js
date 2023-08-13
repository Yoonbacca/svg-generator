const Shapes = require('./shapes.js');

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
    describe('Circle', () => {
        it('should should render a ', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
        });
    });
    describe('Triangle', () => {
        it('should throw an error if given an invalid color keyword', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    describe('Square', () => {
        it('should throw an error if given an invalid color keyword', () => {
            const badString = 'lightestgreen';
            const result = new Circle('abc', 'green', badString);

            expect(result).toEqual(false);
        });
    });
});