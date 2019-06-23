// Create bucketitempostimage table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bucketitempostimage', function(tbl) {
        tbl.increments('id')
           .unsigned()
           .unique();
        tbl.string('post_id', 255)
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('bucketitempost')
           .onDelete("CASCADE")
           .onUpdate("CASCADE");
        tbl.blob('image');
        tbl.string('url');
        tbl.timestamp('created')
        .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bucketitempostimage');
};
