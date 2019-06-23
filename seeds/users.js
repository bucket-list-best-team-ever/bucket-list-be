const bcrypt = require('bcryptjs');

// Create a test user
exports.seed = function(knex, Promise) {

  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {name: 'Test User', email: 'test@test.com', password: bcrypt.hashSync('test', 8)},

      ]);
    });
};
