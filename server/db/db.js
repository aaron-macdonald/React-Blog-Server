const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getHome() {
  return knex('Home')
    .select()
}

function getAboutMe() {
  return knex('AboutMe')
    .select()
}

function getResume() {
  return knex('Resume')
    .select()
}

function getDevAcademy() {
  return knex('DevAcademy')
    .select()
}

module.exports = {
  getHome,
  getAboutMe,
  getResume,
  getDevAcademy,
}
