// 6-payment_token.test.js

const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
    it('should resolve with the correct object when success is true', function (done) {

        getPaymentTokenFromAPI(true)
            .then((result) => {

                expect(result).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });

    it('should resolve with undefined when success is false', function (done) {

        getPaymentTokenFromAPI(false)
            .then((result) => {

                expect(result).to.be.undefined;
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
});
