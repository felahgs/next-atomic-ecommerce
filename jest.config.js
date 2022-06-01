// Jest configuration file
module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    "/node_modules/",
    "src/stories",
    "/.next/",
    "/cypress/"
  ],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/components$1",
    "^pages(.*)$": "<rootDir>/pages$1",
    "^tests(.*)$": "<rootDir>/tests$1",
  },
  "collectCoverage": false,
  "collectCoverageFrom": [
    "pages/**",
    "src/**/*.ts",
    "src/**/*.tsx",
    //ignored files
    "!pages/_app.tsx",
    "!pages/_document.tsx",
    "!src/stories/**",
    "!src/**/*.types.ts*",
    "!src/**/*.stories.ts*",
    "!src/**/*.style.ts*"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90,
    }
  }
};
