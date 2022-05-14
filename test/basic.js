'use strict'

const config = require('../index')
const { expect } = require('expect')
const { test } = require('@japa/runner')

test('config contains basic properties', () => {
  expect(typeof config.env === 'object').toBe(true)
  expect(typeof config.rules === 'object').toBe(true)
  expect(typeof config.globals === 'object').toBe(true)
  expect(typeof config.parserOptions === 'object').toBe(true)
})
