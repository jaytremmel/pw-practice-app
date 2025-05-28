# pw-practice-app — Playwright Sandbox Toolbelt

![Playwright Tests](https://img.shields.io/badge/Playwright%20Tests-passing-success)
![Playwright](https://img.shields.io/badge/Playwright-%5E1.43.0-green?logo=playwright&style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.x-brightgreen?logo=node.js&style=flat-square)
![MIT License](https://img.shields.io/github/license/jaytremmel/pw-practice-app?style=flat-square)

This is my personal Playwright sandbox. It's a persistent toolbelt I use for exploring, testing, and refining automation workflows. It's not meant for production use. It’s an iterative space where I build out commonly used selectors, reusable functions, and test patterns across a variety of components and UI states.

## 📦 Current Project State

Right now, this repo is focused on a single test case as I set up and validate the CI pipeline.  
This phase is about reliability and integration, not coverage.

- ✅ CI Pipeline: In progress
- ✅ PR Gatekeeping: Configured
  - Pull requests are now automatically validated against this test.
  - Failures block the PR from merging.
- 🖼️ Screenshot Testing: Argo CI integration enabled

## 🛣️ Next Steps

- Expand test coverage across the full suite
- Fix passing badge from manual - add playwright.yml to project
- Build utility wrappers for more advanced selectors
- Add environment toggles for dev/staging/prod test targets
- Tighten reporting and alerting on visual regressions

## 🤝 Why This Exists

Sometimes you just need your own playground and a space to move fast, break things, iterate without red tape.  
This is mine.

Go Bills!!

-Jay
