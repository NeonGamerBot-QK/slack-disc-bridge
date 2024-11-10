const  SimpleJSONDB  = require('simple-json-db');
const { resolve } = require('path');

const db = new SimpleJSONDB(resolve(__dirname, '../../db.json'));

module.exports = db;