import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  clearMocks: true,
  collectCoverage: true,
  verbose: true,
  coverageDirectory: "coverage",
  rootDir: "./src/test",
  // roots: ["./src/test"],
  // projects: ["./src/test", "./src/browser", "./src/node"],
  // automock: true,
  // extensionsToTreatAsEsm: [".ts"],
  // moduleNameMapper: { "^(\\.{1,2}/.*)\\.js$": "$1" },
  // moduleFileExtensions: ["ts", "js"],
  // transform: { "^.+\\.(ts)?$": "ts-jest" },
  preset: "ts-jest/presets/js-with-babel-esm",
  // roots: [],
  // testEnvironment: "node",
  // transformIgnorePatterns: ["node_modules/(?!node-fetch)/"],
};

export default config;
