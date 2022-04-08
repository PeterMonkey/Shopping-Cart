import nextJest from 'next/jest'

const createJestConfig = nextJest({dir: '.'})

const customJestConfig = {
    testEnviroment: 'jsdom',
    clearMocks: true,
    moduleDirectories: ['node_modules', '.'],
    setupFilesAfterEnv: ['<rootDir>/setupTest.ts']
}

module.exports = createJestConfig(customJestConfig)