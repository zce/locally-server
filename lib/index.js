const { join } = require('path')
const jsonServer = require('json-server')

const config = {
  db: join(__dirname, '../database.json'),
  enableDelay: false
}

const server = jsonServer.create()
const router = jsonServer.router(config.db)

// Common middlewares
server.use(jsonServer.defaults({ readOnly: true }))
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  // enable?
  if (!config.enableDelay) return next()
  // ignore options request
  if (req.method === 'OPTIONS') return next()
  setTimeout(next, Math.random() * 1000)
})

// backdoor: Toggle delay action
server.get('/backdoor/delay', (req, res) => {
  config.enableDelay = !config.enableDelay
  res.send(config.enableDelay)
})

// Use default json server router
server.use(router)

module.exports = server
