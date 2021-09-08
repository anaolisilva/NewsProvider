const express = require('express');
const app = express.Router();
const UserController = require('./controllers/UserController')
const ArticleController = require('./controllers/ArticleController')
const AuthorController = require('./controllers/AuthorController')

// Routes users
app
.get('/users', UserController.index)
.get('/users/:id', UserController.getById)
.post('/users', UserController.singUp)
.put('/users/:id', UserController.updateUser)
.delete('/users/:id', UserController.deleteUser)

//Routes authors
.get('/admin/authors', AuthorController.index)
.get('/admin/authors/:id', AuthorController.getAuthorById)
.post('/admin/authors', AuthorController.createAuthor)
.put('/admin/authors/:id', AuthorController.updateAuthor)
.delete('/admin/authors/:id', AuthorController.deleteAuthor)

// Routes articles
.get('/articles', ArticleController.index)
.post('/admin/articles', ArticleController.createArticle)
.put('/admin/articles', ArticleController.updateArticle)
.delete('/admin/articles', ArticleController.deleteArticle)



module.exports = app
