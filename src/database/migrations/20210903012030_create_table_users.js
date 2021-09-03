
exports.up = function(knex) {

  return knex.schema.createTable('users', function(table){
    table.increments('id')
    table.text('username').unique().notNullable()
    table.text('password').notNullable()
    table.boolean('admin').defaultTo(false)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    // Essa função now é nativa do knex, e pega o timestamp.
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })
  
};

exports.down = knex => knex.schema.dropTable('users');

// Função em arrow function, pra deixar o código mais limpo.
