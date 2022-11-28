/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from 'jest';
import { defaults } from 'jest-config';

export default {
    moduleFileExtensions: [...defaults.moduleFileExtensions],
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['/node_modules/'],
    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'babel',
    // The test environment that will be used for testing
    testEnvironment: 'jsdom',
} as Config;
