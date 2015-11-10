var through = require('through2')
var resig = require('resig')

module.exports = function (file, options) {
  if (!/\.html$/i.test(file)) {
    return through()
  }

  return through(function (buf, enc, next) {
    this.push('module.exports = ' + resig(buf.toString()).toString() + ';')
    next()
  })
}
