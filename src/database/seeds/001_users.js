
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: '123456', admin: 'true'},
        {username: 'ana', password: '123456', admin: 'true'},
        {username: 'someone', password: '123456'},
      ]);
    });
  
};
