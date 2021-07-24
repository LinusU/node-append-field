import parsePath from './lib/parse-path.js'
import setValue from './lib/set-value.js'

export default function appendField (store, key, value) {
  const steps = parsePath(key)

  steps.reduce((context, step) => {
    return setValue(context, step, context[step.key], value)
  }, store)
}
