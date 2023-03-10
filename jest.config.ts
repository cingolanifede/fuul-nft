// jest.config.ts
import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  roots: ["<rootDir>/src/test"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  verbose: true,
  // collectCoverage: true,
  // collectCoverageFrom: ["<rootDir>/**/*.ts"],
};
export default config;
