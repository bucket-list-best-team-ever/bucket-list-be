
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bucketitempost').del()
    .then(function () {
      // Inserts seed entries
      return knex('bucketitempost').insert([
        {bucketitem_id: 1, message: 'I did not drive one'},
        {bucketitem_id: 1, message: 'They are to damn expensive'},
        {bucketitem_id: 2, message: 'I finally went to Hawaii'},
        {bucketitem_id: 3, message: 'I a pizza'},
        {bucketitem_id: 3, message: 'Burned my tongue'},
        {bucketitem_id: 4, message: 'Did not make it to Alaska'},
        {bucketitem_id: 4, message: 'Plane crashed'},
        {bucketitem_id: 4, message: 'End of bucket list'},
        {bucketitem_id: 5, message: 'Drove a Lambo'},
        {bucketitem_id: 5, message: 'Immediately crashed it'},
        {bucketitem_id: 6, message: 'Ate a taco'},
        {bucketitem_id: 6, message: 'Now have gas'},
        {bucketitem_id: 7, message: 'Still poor as ever'},
        {bucketitem_id: 8, message: 'Blue screen of death'},
      ]);
    });
};
