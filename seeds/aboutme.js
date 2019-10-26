
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('AboutMe').del()
    .then(function () {
      // Inserts seed entries
      return knex('AboutMe').insert([
        {id: 100, url: 'personal', heading: 'Personal', intro: 'Welcome to my blog', content: 'Hi there, my name is Aaron Macdonald'},
        {id: 101, url: 'family', heading: 'Family', intro: 'A wife, two kids and a dog', content: 'I have a good sized family'},
        {id: 102, url: 'programming', heading: 'Programming', intro: 'Lets retrain at 46 yrs old aye', content: 'Thank goodness for EDA'},
        {id: 103, url: 'softball', heading: 'Softball', intro: 'My happy place', content: 'A friend and parent of one of my players once described coaching softball as my happy place'},
        {id: 104, url: 'gardening', heading: 'Gardening', intro: 'Green is great', content: 'Gardening has been handed down from my mum to my sister to me'},

      ])
    })
}
