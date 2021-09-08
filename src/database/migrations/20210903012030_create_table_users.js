
exports.up = function(knex) {

  return knex.schema.createTable('users', function(table){
    table.increments('id')
    table.string('username').unique().notNullable()
    table.string('password').notNullable()
    table.boolean('admin').defaultTo(false)
  })
  
};

exports.down = knex => knex.schema.dropTable('users');

// Função em arrow function, pra deixar o código mais limpo.
