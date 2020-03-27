const knex = require('knex');
const confuguration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? confuguration.test : confuguration.development;

const connection = knex(config);

module.exports = connection;