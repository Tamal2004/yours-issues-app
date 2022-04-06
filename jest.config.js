const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './'
});

const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
        '^molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
        '^organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
        '^templates/(.*)$': '<rootDir>/src/components/templates/$1',
        '^utils/(.*)$': '<rootDir>/src/utils/$1',
        '^features/(.*)$': '<rootDir>/src/features/$1',
        '^services/(.*)$': '<rootDir>/src/services/$1',
        '^types/(.*)$': '<rootDir>/src/types/$1',
        '^theme/(.*)$': '<rootDir>/src/theme/$1',
        '^theme$': '<rootDir>/src/theme/theme.ts'
    }
};

module.exports = createJestConfig(customJestConfig);
