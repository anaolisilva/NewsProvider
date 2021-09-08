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

      let newUser = req.body;

      await User.query().insert(newUser);

      // await knex('users').insert({ username, password, admin });

      return res.status(201).send();

    } catch(error) {

      next(error);

    }

  },

  async update (req, res, next) {
    try {
      let updateUser = req.body;

      const { id } = req.params

      await User.query().findById(id).patch(updateUser);

      updateUser = await User.query().findById(id);

      return res.send(updateUser);

    }catch(error){
      next(error);
    }

  },

  async delete (req, res, next) {
    try {
      const { id } = req.params;

      await User.query().deleteById(id);

      return res.send();

    } catch(error){
      next(error);
    }
  }
  
}
