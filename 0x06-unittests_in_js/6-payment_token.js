// 6-payment_token.js

const getPaymentTokenFromAPI = (success) => {
    if (success) {
        return Promise.resolve({ data: 'Successful response from the API' });
    } else {
        return Promise.resolve();
    }
};

module.exports = { getPaymentTokenFromAPI };
