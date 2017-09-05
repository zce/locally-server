const express = require('express')
const morgan = require('morgan')
const delay = require('./delay')
const jsonServer = require('./json-server')

const port = process.env.PORT || 16688

const app = module.exports = express()

app.use(delay())
app.use(morgan('dev'))
app.use(jsonServer())

if (!module.parent) {
  app.listen(port, err => {
    if (err) throw err
    console.log(`> API Serve in http://localhost:${port}/`)
  })
}
