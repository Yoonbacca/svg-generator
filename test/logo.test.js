const Logo = require('../lib/logo.js');
const colors = require('../lib/colors.json');
const colorKeyArray = Object.keys(colors);

describe('Logo', () => {
    describe('Text Length', () => {
        it('should throw an error if given more than 3 characters', () => {
            const badString = 'ab12';
            const result = new Logo(badString, 'green', 'triangle', 'blue');

            expect(result).toEqual(false);
        });
    });
    describe('Text Color', () => {
        it('should throw an error if given an invalid color keyword', () => {
            const badString = 'lightestgreen';
            const result = new Logo('abc', badString, 'triangle', 'blue');

            expect(result).toEqual(false);
        });

        it('should throw an error if given an invalid hexadecimal', () => {
            const badString = 'lightestgreen';
            const result = new Logo('abc', badString, 'triangle', 'blue');

            expect(result).toEqual(false);
        });
    });
    describe('Shape Type', () => {
        it('should throw an error if given an invalid shape', () => {
            const badString = 'hexagon';
            const result = new Logo('abc', 'green', badString, 'blue');

            expect(result).toEqual(false);
        });
    });
    describe('Shape Color', () => {
        it('should throw an error if given an invalid color keyword', () => {
            const badString = 'lightestgreen';
            const result = new Logo('abc', 'green', 'triangle', badString);

            expect(result).toEqual(false);
        });

        it('should throw an error if given an invalid hexadecimal', () => {
            const badString = 'lightestgreen';
            const result = new Logo('abc', 'green', 'triangle', badString);

            expect(result).toEqual(false);
        });
    });
});