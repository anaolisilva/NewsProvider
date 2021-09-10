const bcrypt = require('bcryptjs');

exports.seed = async function(knex) {

  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash('123456', salt)
  // Deletes ALL existing entries
  await knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: encryptedPassword, admin: 'true'},
        {username: 'ana', password: encryptedPassword, admin: 'true'},
        {username: 'someone', password: encryptedPassword},
      ]);
    });
  
};
