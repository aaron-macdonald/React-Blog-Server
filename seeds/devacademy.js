
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('DevAcademy').del()
    .then(function () {
      // Inserts seed entries
      return knex('DevAcademy').insert([
        {id: 100, url: 'devacademy', heading: 'Dev Academy', intro: 'Dev Academy Intro', content: 'Dev Academy content' },
        {id: 101, url: 'technical', heading: 'Technical', intro: 'Technical Intro', content: 'Technical content'},
        {id: 102, url: 'cultural', heading: 'Cultural', intro: 'Cultural Intro', content: 'Cultural content'},
        {id: 103, url: 'html', heading: 'Html', intro: 'Html Intro', content: 'Html content'},
        {id: 104, url: 'css', heading: 'Css', intro: 'Css Intro', content: 'Css Intro' },
        {id: 105, url: 'icons', heading: 'Icons', intro: 'Icons Intro', content: 'Icons Intro' },
        {id: 106, url: 'javascript', heading: 'Javascript', intro: 'Javascript Intro', content: 'Javascript Intro' },
        {id: 107, url: 'minesweeper', heading: 'Minesweeper', intro: 'Minesweeper Intro', content: 'Minesweeper Intro' },
      ])
    })
}
