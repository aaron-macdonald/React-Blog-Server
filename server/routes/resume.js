const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())

const db = require('../db/db')

router.get('/resume', (req, res) => {
  db.getResume()
    .then(result => {res.json(result)})
    .catch(err => res.status(500).end)
})

module.exports = router
