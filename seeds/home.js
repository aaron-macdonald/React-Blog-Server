
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Home').del()
    .then(function () {
      // Inserts seed entries
      return knex('Home').insert([
        {id: 100, url: 'home1', heading: 'Home1', intro: 'Home1 Intro', content: 'Home1 content' },
        {id: 101, url: 'home2', heading: 'Home2', intro: 'Home2 Intro', content: 'Home2 content'},
        {id: 102, url: 'home3', heading: 'Home3', intro: 'Home3 Intro', content: 'Home3 content'},
      ])
    })
}
