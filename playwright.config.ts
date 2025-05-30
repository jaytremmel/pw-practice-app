import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';

// this was OG imported from dotenv and then errored, leaving for further eval
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
require('dotenv').config();

export default defineConfig<TestOptions>({
  timeout: 40000,
  // globalTimeout: 60000,
  
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [ process.env.CI ? ["dot"] : ["list"],
    ['json', {outputFile: 'test-results/jsonReport.json'}],
    ['junit', {outputFile: 'test-results/junitReport.json'}],
    ['html'],
    [
      "@argos-ci/playwright/reporter",
      {
        // Upload to Argos on CI only.
        uploadToArgos: !!process.env.CI,

        // Set your Argos token (required if not using GitHub Actions).
        // token: "argos_cefd26f3eb0d18386de17cd36e56d8bc09",
      },
    ],
  ],

  use: {
    baseURL: 'http://localhost:4200',
    globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
    trace: 'on-first-retry',
    screenshot: "only-on-failure",
    actionTimeout: 20000,
    navigationTimeout: 5000,
    video: {
      mode: 'off',
    }
  },

  projects: [

    {
      name: 'chromium',
    },

    {
      name: 'firefox',
    }

  ],

  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200',
    timeout: 120000
  }
});
