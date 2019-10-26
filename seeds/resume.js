
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Resume').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resume').insert([
        {id: 100, url:'profile', heading: 'Profile', intro: 'Profile Intro', content: 'Profile content' },
        {id: 101, url:'experience', heading: 'Experience', intro: 'Experience Intro', content: 'Experience content'},
        {id: 102, url:'technology', heading: 'Technology', intro: 'Technology Intro', content: 'Technology content'},
        {id: 103, url:'education', heading: 'Education', intro: 'Education Intro', content: 'Education content'},
        {id: 104, url:'connect', heading: 'Connect', intro: 'Connect Intro', content: 'Connect Intro' },
      ])
    })
}
