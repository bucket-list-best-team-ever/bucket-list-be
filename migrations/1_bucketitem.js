// Create bucketitem table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bucketitem', function(tbl) {
        tbl.increments('id')
           .unsigned()
           .unique();
        tbl.string('user_id', 255)
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('users')
           .onDelete("CASCADE")
           .onUpdate("CASCADE");
        tbl.boolean('completed')
           .notNullable()
           .defaultTo(false)
        tbl.string('description', 1000)
           .notNullable()
           tbl.timestamp('created')
           .defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('bucketitem')

};
