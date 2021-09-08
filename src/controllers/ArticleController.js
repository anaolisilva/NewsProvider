const knex = require("../database");
const Article = require('../models/Article');

module.exports = {
  async index(req, res) {
    const results = await knex('articles').join('authors', 'articles.author_id', '=', 'authors.id').select('articles.*', 'authors.name', 'authors.picture');

    return res.json(results);
  },

  //Dá status ok mas não retorna nada
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Article.query().findById(id).join('authors', 'articles.author_id', 'authors.id').select('articles.*', 'authors.name', 'authors.picture');
      return res.json(result); 

    } catch(error) {

      next(error);
    }
  },

}
