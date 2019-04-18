'use strict'
const IsRequiredError = require('./is-required-error')
const IsRequiredError2 = require('.').IsRequiredError

describe('IsRequiredError', () => {
    it('should be an instance of the Error class', () => {
        const error = new IsRequiredError('test')
        expect(error).toBeInstanceOf(Error)
    })
    it('should have the correct name', function() {
        const error = new IsRequiredError('test')
        expect(error.name).toBe(IsRequiredError.name)
    })
    it('should have an error code for localisation', function() {
        const error = new IsRequiredError('test')
        expect(error.code).toBeTruthy()
    })
    it('should have a stack', function() {
        const error = new IsRequiredError('test')
        expect(error.stack).toBeTruthy()
    })
    it('should have a message', function() {
        const error = new IsRequiredError('test')
        expect(error.message).toBeTruthy()
    })
    it('should be accessible from index', function() {
        const error = new IsRequiredError2('test')
        expect(error).toBeTruthy()
    })
})
