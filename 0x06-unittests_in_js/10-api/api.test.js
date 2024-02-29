// api.test.js

const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Login endpoint', function () {
    it('Correct response from POST /login', function (done) {
        request.post({
            url: 'http://localhost:7865/login',
            json: { userName: 'Betty' }
        }, (error, response, body) => {

            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});

describe('Available Payments endpoint', function () {
    it('Correct response from GET /available_payments', function (done) {
        request('http://localhost:7865/available_payments', (error, response, body) => {

            const expectedResponse = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            expect(JSON.parse(body)).to.deep.equal(expectedResponse);
            done();
        });
    });
});
