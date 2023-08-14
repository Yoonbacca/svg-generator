const Shapes = require('./shapes.js');
const Circle = Shapes.Circle;
const Triangle = Shapes.Triangle; 
const Square = Shapes.Square;

describe('Shapes', () => {
    describe('Logo Start', () => {
        it('should should render the start of the svg file consistently ', () => {
            const circle = new Circle('abc', 'blue', 'blue');
            const logoStart = circle.renderStart();
            expect(logoStart).toContain(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`);
        });
        it('should should render the end of the svg file consistently ', () => {
            const circle = new Circle('abc', 'blue', 'blue');
            const logoEnd = circle.renderEnd();
            expect(logoEnd).toContain(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">abc</text>`);
        });
    });
    describe('Circle', () => {
        it('should render a line of SVG code for a blue Circle', () => {
            const circle = new Circle('abc', 'blue', 'blue');
            const logo = circle.render();
            expect(logo).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });

    describe('Triangle', () => {
        it('should render a line of SVG code for a blue Triangle', () => {
            const triangle = new Triangle('abc', 'blue', 'blue');
            const logo = triangle.render();
            expect(logo).toEqual('<polygon points="40,180 150,20 260,180" fill="blue" />');
        });
    });
    describe('Square', () => {
        it('should render a line of SVG code for a blue Square', () => {
            const square = new Square('abc', 'blue', 'blue');
            const logo = square.render();
            expect(logo).toEqual('<polygon points="50,0 250,0 250,200 50,200" fill="blue" />');
        });
    });
});