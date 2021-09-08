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
.put('/users/:id', UserController.updateUser)
.delete('/users/:id', UserController.deleteUser)

// Routes articles
.get('/articles', ArticleController.index)
.post('/admin/articles', ArticleController.createArticle)
.put('/admin/articles', ArticleController.updateArtcile)
.delete('/admin/articles', ArticleController.deleteArticle)



module.exports = app
