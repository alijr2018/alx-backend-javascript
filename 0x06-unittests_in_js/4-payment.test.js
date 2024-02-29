// 4-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber with correct arguments', function () {

        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleLogSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});
