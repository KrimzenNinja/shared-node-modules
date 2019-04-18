'use strict';
module.exports = {
    'check-coverage': true,
    lines: 90,
    statements: 90,
    functions: 90,
    branches: 90,
    all: true,
    include: ['src/**'],
    exclude: ['src/**/*.test.js', 'src/**/*.unit.js', 'src/**/*.integration.js'],
    reporter: ['html', 'text-summary'],
};
