const express = require('express');
const knex = require('./database')
const app = express.Router();
const UserController = require('./controllers/UserController')

app.get('/users', UserController.index)


module.exports = app
