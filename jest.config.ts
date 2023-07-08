import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  clearMocks: true,
  collectCoverage: true,
  verbose: true,
  coverageDirectory: "coverage",
  // extensionsToTreatAsEsm: [".ts"],
  // moduleNameMapper: { "^(\\.{1,2}/.*)\\.js$": "$1" },
  // moduleFileExtensions: ["ts", "js"],
  transform: {
    // "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts)?$": "ts-jest",
  },
  preset: "ts-jest",
  // testEnvironment: "node",
  // transformIgnorePatterns: ["node_modules/(?!node-fetch)/"],
};

export default config;
