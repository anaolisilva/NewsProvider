const knex = require("../database");
const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const results = await knex('users');
    // Aguarda retorno da função knex

    return res.json(results);
  },

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.query().findById(id);
      
      return res.json(user); 

    }catch(error) {

      next(error);
    }
  },

  async singUp(req, res, next) {
    
    try {

      const { username, password, admin } = req.body;

      await knex('users').insert({ username, password, admin });

      return res.status(201).send();

    } catch(error) {

      next(error);

    }

  },

  async update (req, res, next) {
    try {
      const { username, password, admin } = req.body;

      // Captura id da url da requisição
      const { id } = req.params

      
      // Define o update comparando o id com o capturado, para fazer a inserção certa dos dados.
      await knex('users').update({ username, password, admin }).where({ id : id});

      return res.send();

    }catch(error){
      next(error);
    }

  },

  async delete (req, res, next) {
    try {
      const { id } = req.params;

      await knex('users').where({ id }).del();

      return res.send();

    } catch(error){
      next(error);
    }
  }
  
}
