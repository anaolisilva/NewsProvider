const express = require('express');
const knex = require('./database')
const app = express.Router();
const UserController = require('./controllers/UserController')
const ArticleController = require('./controllers/ArticleController')

// Routes users
app
.get('/users', UserController.index)
.get('/users/:id', UserController.getById)
.post('/users', UserController.singUp)
.put('/users/:id', UserController.update)
.delete('/users/:id', UserController.delete)

// Routes articles
.get('/articles', ArticleController.index)
.get('/articles/:id', ArticleController.getById)


module.exports = app
