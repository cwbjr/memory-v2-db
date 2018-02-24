
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coffee', coffee => {
    coffee.increments('id').primary();
    coffee.string('name');
    coffee.string('roaster');
    coffee.integer('aroma');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('coffee');
};
