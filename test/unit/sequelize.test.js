const { sequelize, dataTypes } = require('../../src')
const classBased = require('../brokenModels/classBased')
const staticMethods = require('../../src/constants/staticMethods')

describe('src/sequelize', () => {
  it('has define', () => {
    expect(sequelize).toHaveProperty('define')
    expect(sequelize.define).toBeInstanceOf(Function)
  })

  staticMethods.forEach(method => {
    it(`has static method ${method}`, () => {
      const fn = sequelize[method]
      expect(fn.constructor.name).toBe('Function')
    })
  })

  describe('when model is class-based', () => {
    it('breaks the test', () => {
      expect(() => classBased(sequelize, dataTypes)).toThrow(
        'sequelize-jest-helpers does not support extending sequelize.Model.'
      )
    })
  })
})
