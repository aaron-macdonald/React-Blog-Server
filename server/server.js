const express = require('express')
const cors = require('cors')

const home = require('./routes/home')
const aboutme = require('./routes/aboutme')
const resume = require('./routes/resume')
const devacademy = require('./routes/devacademy')

const server = express()
server.use(cors())
server.use(express.static('public'))

server.use('/api/v1/home', home)
server.use('/api/v1/aboutme', aboutme)
server.use('/api/v1/resume', resume)
server.use('/api/v1/devacademy', devacademy)

module.exports = server
