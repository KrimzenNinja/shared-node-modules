'use strict';
module.exports = {
    testRegex: '.*((unit|integration|test)\\.js)',
    testEnvironment: 'node',
    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },
    },
    collectCoverageFrom: ['src/**/*.js'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],
    coverageDirectory: './coverage/',
    coverageReporters: ['text', 'html'],
};
