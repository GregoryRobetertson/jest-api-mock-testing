'use strict';

const { default: axios } = require("axios");

async function getUser() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error('User not found');
        } else if (error.code === 'ENOTFOUND') {
            throw new Error('Network error');
        } else {
            throw new Error('Failed to fetch user data');
        }
    }
}

module.exports = getUser;