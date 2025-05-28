# pw-practice-app — Playwright Sandbox Toolbelt

This is my personal Playwright sandbox — a persistent toolbelt I use for exploring, testing, and refining automation workflows. It's not meant for production use. It’s a living, iterative space where I build out commonly used selectors, reusable functions, and test patterns across a variety of components and UI states.

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
- Build utility wrappers for more advanced selectors
- Add environment toggles for dev/staging/prod test targets
- Tighten reporting and alerting on visual regressions

## 🤝 Why This Exists

Sometimes you just need your own playground — a space to move fast, break things, and iterate without red tape.  
This is mine.

Feel free to fork or reference if you're building your own automation toolbelt.
