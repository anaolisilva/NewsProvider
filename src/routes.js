const express = require('express');
const knex = require('./database')
const app = express.Router();
const UserController = require('./controllers/UserController')

app.get('/users', UserController.index)
app.post('/users', UserController.singUp)

app.put('/users/:id', UserController.update)


module.exports = app
