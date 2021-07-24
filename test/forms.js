/* eslint-env mocha */

import assert from 'node:assert'
import testData from 'testdata-w3c-json-form'
import appendField from '../index.js'

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
