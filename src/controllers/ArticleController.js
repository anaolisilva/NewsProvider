const Article = require('../models/Article');

module.exports = {
  async index(req, res, next) {
    try {

      const results = await Article.query().withGraphFetched('author');
  
      return res.json(results);

    }catch(error){
      next(error);
    }
  },

  async createArticle(req, res, next){
    try{
      const newArticle = req.body;

      await Article.query().insert(newArticle);

      return res.status(201).send();

    }catch(error){
      next(error);
    }
  },


  async updateArticle(req, res, next){
    try{

      let updateArticle = req.body;

      const { id } = req.params

      await Article.query().findById(id).patch(updateArticle);

      updateArticle = await Article.query().findById(id);

      return res.send(updateArticle);
      
    }catch(error){
      next(error);
    }
  },

  async deleteArticle(req, res, next) {
    try{

      const {id} = req.params

      await Article.query().deleteById(id);

      return res.send();


    }catch(error){
      next(error);
    }
  }

  

}
