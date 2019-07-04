const diff = require('../arrayDiff');
const expect = require('chai').expect;

describe('function handles properly', () => {
    it('throws an error when a is empty', () => {
        const a = [];
        const b = [1, 2, 3];
        const result = diff(a, b);
        expect(result).to.throw();
    });
    it('returns a when b is empty', () => {
        const a = [1, 2, 3];
        const b = [];
        const result = diff(a, b);
        expect(result).to.deep.equal([1, 2, 3]);
    });
    it('returns a when b contains the same elements', () => {
        const a = [1, 2, 3], b = [1, 2, 3];
        expect(diff(a, b)).to.deep.equal(a);
    });
    it('returns a filtered version of a', () => {
        const a = [1, 2, 3], b = [2];
        const expected = [1, 2];
        expect(diff(a, b)).to.deep.equal(exptected);
    })
})