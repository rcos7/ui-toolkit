module.exports = {
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testMatch: ["**/?(*.)+(spec|test).js?(x)"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setup.js"],
};
