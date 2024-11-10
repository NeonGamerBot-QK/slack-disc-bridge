
require('dotenv').config();
const app = require('./modules/slack');
const db = require('./modules/db');
app.db = db;

app.start();
