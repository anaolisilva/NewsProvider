
exports.up = function(knex) {
  return knex.schema.createTable('authors', function(table){
    table.increments('id')
    table.text('name').unique().notNullable()
    table.text('picture')
  })
};

exports.down = knex => knex.schema.dropTable('authors');

