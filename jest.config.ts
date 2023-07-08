import type { Config } from "@jest/types";

// Sync object

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  globals: {
    testURL: "http://localhost",
    modelerHost: null,
    engineHost: null,
    disableTLSCerts: true,
    containerGroup: null,
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
    "**/?(*.)+(spec|test).(api).[tj]s?(x)"
  ],

  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
  ],

  transform: {
   "\\.[jt]sx?$": "babel-jest",
  },
  verbose: true,
};

export default config;
