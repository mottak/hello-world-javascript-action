import type {JestConfigWithTsJest} from 'ts-jest';

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};

export default config;
