
// Create users table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
        tbl.increments('id')
           .unsigned()
           .unique();
        tbl.string('name', 255)
        .notNullable();
        tbl.string('email', 500)
           .notNullable()
           .unique();
        tbl.string('password', 500)
           .notNullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
