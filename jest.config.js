// Jest configuration file
module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/components$1",
    "^pages(.*)$": "<rootDir>/pages$1",
    "^tests(.*)$": "<rootDir>/tests$1",
  },
};
