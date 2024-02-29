// 3-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber with correct arguments', function () {

        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

        calculateNumberSpy.restore();
    });
});
