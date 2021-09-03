const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex('users');
    // Aguarda retorno da função knex

    return res.json(results)

  }
  
}
