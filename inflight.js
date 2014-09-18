var wrappy = require('wrappy')
var reqs = Object.create(null)
var once = require('once')

module.exports = wrappy(inflight)

function inflight (key, cb) {
  if (reqs[key]) {
    reqs[key].push(cb)
    return null
  } else {
    reqs[key] = [cb]
    return makeres(key)
  }
}

function makeres(key) {
  return once(function(error,  data) {
    var cbs = reqs[key]
    delete reqs[key]
    cbs.forEach(function(cb) {
      cb(error, data)
    })
  })
}
