'use strict';

require('util').inherits(IsRequiredError, Error);

/**
 * An error used when some value that is required was not provided
 * @param {string} requiredValue The name of the required value
 * @param {string?} functionName The name of the function where the required value was supposed to be provided too
 * @constructor
 */
function IsRequiredError(requiredValue, functionName) {
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }
    this.name = this.constructor.name;
    this.code = 'ERR_KN_IS_REQUIRED';
    if (functionName) {
        this.message = `You must provide "${requiredValue}" to the "${functionName}" function`;
    } else {
        this.message = `The "${requiredValue}" value is required`;
    }
}

module.exports = IsRequiredError;
