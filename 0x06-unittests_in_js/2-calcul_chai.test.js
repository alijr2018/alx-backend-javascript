// 2-calcul_chai.test.js
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculateNumber', function () {
    it('should add two numbers when type is SUM', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should subtract b from a when type is SUBTRACT', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should divide a by b when type is DIVIDE', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should throw an error for an invalid type', function () {
        expect(() => calculateNumber('INVALID_TYPE', 1.4, 4.5)).to.throw(Error);
    });
});
