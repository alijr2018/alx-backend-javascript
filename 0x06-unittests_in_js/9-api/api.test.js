// api.test.js

const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Cart page', function () {
    it('Correct status code when :id is a number?', function (done) {
        request('http://localhost:7865/cart/12', (error, response, body) => {

            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Correct status code when :id is NOT a number (=> 404)?', function (done) {
        request('http://localhost:7865/cart/hello', (error, response, body) => {

            expect(response.statusCode).to.equal(404);
            done();
        });
    });

});
