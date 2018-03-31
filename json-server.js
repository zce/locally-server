const path = require('path')
const { defaults, router } = require('json-server')

module.exports = () => [
  defaults({ readOnly: true }),
  router(path.join(__dirname, 'database.json'))
]
