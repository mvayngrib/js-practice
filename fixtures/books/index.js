const fs = require('fs')
const path = require('path')

module.exports = fs.readdirSync(__dirname).reduce((authors, file) => {
  if (file.endsWith('.json')) {
    const { name } = path.parse(file)
    authors[name] = require(path.join(__dirname, file))
  }
  return authors
}, {})
