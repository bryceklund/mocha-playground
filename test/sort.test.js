const mocha = require('mocha');
const expect = require('chai').expect;
const sort = require('../sort');

describe('sort function tests', () => {
    it('sorts an array properly', () =>{
        const inputArr = [3, 9, 1, 4, 600, 100, 7, 3, 7, 2, 8];
        const expectedArr = [1, 2, 3, 3, 4, 7, 7, 8, 9, 100, 600];
        const actualArr = sort(inputArr);
        expect(actualArr).to.deep.equal(expectedArr);
    })
});