const express = require('express');
const app = express.Router();
const UserController = require('./controllers/UserController');
const ArticleController = require('./controllers/ArticleController');
const AuthorController = require('./controllers/AuthorController');
const AuthenticationService = require('./services/auth')

app

// Routes users
.get('/users', UserController.index)
.get('/users/:id', UserController.getById)
.post('/sign-up', UserController.singUp)
.post('/login', AuthenticationService.login)
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



module.exports = app;
