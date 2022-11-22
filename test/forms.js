/* eslint-env mocha */

const assert = require('node:assert')
const testData = require('testdata-w3c-json-form')
const appendField = require('../index.js')

describe('Append Field', () => {
  for (const test of testData) {
    it(`handles ${test.name}`, () => {
      const store = Object.create(null)

      for (const field of test.fields) {
        appendField(store, field.key, field.value)
      }

      assert.deepEqual(store, test.expected)
    })
  }
})
