exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('AboutMe', function(table) {
    table.increments().primary()
    table.string('url')
    table.string('heading')
    table.string('intro')
    table.string('content')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Aboutme')
}
