const express = require('express');
const app = express.Router();
const UserController = require('./controllers/UserController');
const ArticleController = require('./controllers/ArticleController');
const AuthorController = require('./controllers/AuthorController');
const AuthenticationService = require('./services/auth')

app

// Routes users
  // Auth
.post('/sign-up', UserController.singUp)
.post('/login', AuthenticationService.login)

  //Checking and maintenence
.get('/users', UserController.index)
.get('/users/:id', UserController.getById)
.put('/users/:id', UserController.updateUser)
.delete('/users/:id', UserController.deleteUser)

//Routes authors
.get('/admin/authors', AuthenticationService.authorizeAdmin, AuthorController.index)
.get('/admin/authors/:id', AuthenticationService.authorizeAdmin, AuthorController.getAuthorById)
.post('/admin/authors', AuthenticationService.authorizeAdmin, AuthorController.createAuthor)
.put('/admin/authors/:id', AuthenticationService.authorizeAdmin, AuthorController.updateAuthor)
.delete('/admin/authors/:id', AuthenticationService.authorizeAdmin, AuthorController.deleteAuthor)

// Routes articles
.get('/articles/:id', AuthenticationService.authorizeLogin, ArticleController.getArticleById)
.post('/admin/articles', AuthenticationService.authorizeAdmin, ArticleController.createArticle)
.put('/admin/articles', AuthenticationService.authorizeAdmin, ArticleController.updateArticle)
.delete('/admin/articles', AuthenticationService.authorizeAdmin, ArticleController.deleteArticle)

module.exports = app;
