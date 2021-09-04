const express = require('express');
const knex = require('./database')
const app = express.Router();
const UserController = require('./controllers/UserController')

// Routes users
app
.get('/users', UserController.index)
.post('/users', UserController.singUp)
.put('/users/:id', UserController.update)
.delete('/users/:id', UserController.delete)

// Routes authors




module.exports = app
