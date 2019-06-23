// Create bucketitempost table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bucketitempost', function(tbl) {
        tbl.increments('id')
           .unsigned()
           .unique();
        tbl.string('item_id', 255)
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('bucketitem')
           .onDelete("CASCADE")
           .onUpdate("CASCADE");
        tbl.string('message', 1000);  
        tbl.timestamp('created')
        .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bucketitempost');

};
