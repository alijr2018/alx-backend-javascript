// 5-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;

    beforeEach(function () {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        consoleLogSpy.restore();
    });

    it('should log the correct string for totalAmount=100, totalShipping=20', function () {

        sendPaymentRequestToApi(100, 20);

        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;
    });

    it('should log the correct string for totalAmount=10, totalShipping=10', function () {

        sendPaymentRequestToApi(10, 10);

        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;
    });
});
