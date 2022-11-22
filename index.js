const parsePath = require('./lib/parse-path.js')
const setValue = require('./lib/set-value.js')

function appendField (store, key, value) {
  const steps = parsePath(key)

  steps.reduce((context, step) => {
    return setValue(context, step, context[step.key], value)
  }, store)
}

module.exports = appendField
