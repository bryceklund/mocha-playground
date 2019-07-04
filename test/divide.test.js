const divide = require('../index');
const expect = require('chai').expect;

describe('divider tests', () => {
    it('should divide positive integers correctly', () => {
        const a = 8, b  = 2, expectedAnswer = 4;
        const actualAnswer = divide(a, b);

        expect(actualAnswer).to.equal(expectedAnswer);
    });
    it('should throw an error when divide by zero', () => {
        const a = 8, b = 0;

        const fn = () => { divide(a, b) };
        expect(fn).to.throw();
    });
    it('general testing tests', () => {
        expect(2).to.equal(2, '2 === 2');
        expect(2).to.equal("2", '2 === "2"');
        expect(2).to.equal(3, '2 === 3');
        expect('hen').to.equal('Hen', "'hen' == 'Hen'");
    })
});