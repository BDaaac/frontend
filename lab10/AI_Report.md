# AI Report - Lab 10

## Objective

Configured testing and deployment pipeline for the Todo app in `lab10/testing-app`.

## Completed Work

1. Fixed root test command issue:
   - Added scripts to `lab10/package.json` so `npm test` from `lab10` runs tests in `testing-app`.

2. Deployment configuration:
   - Updated `lab10/testing-app/vite.config.ts`:
     - `build.outDir = "dist"`
     - `build.minify = "terser"`
   - Added `lab10/testing-app/.env.production` with:
     - `VITE_API_URL=https://api.example.com`
   - Added `lab10/testing-app/vercel.json` for Vercel build/output/rewrites.

3. CI configuration:
   - Added GitHub Actions workflow `/.github/workflows/ci.yml`:
     - Job `test`: install dependencies and run `npm test`
     - Job `build`: runs after tests and executes `npm run build`
     - Both jobs run in `lab10/testing-app` on Node 20.

4. Build support:
   - Added `terser` to `devDependencies` in `lab10/testing-app/package.json`.

5. Test infrastructure fixes:
   - Added missing package `jest-environment-jsdom`.
   - Added `lab10/testing-app/tsconfig.test.json` for Jest + TypeScript.
   - Updated `lab10/testing-app/jest.config.js` to use `tsconfig.test.json`.
   - Excluded test files from production build in `lab10/testing-app/tsconfig.app.json`.
   - Moved Jest/Testing Library dependencies from `lab10/package.json` to `lab10/testing-app/package.json` to avoid duplicate React instances.

6. Submission structure:
   - Created directories:
     - `Lab_10/task1`
     - `Lab_10/task2`

## Test Coverage Check

`TodoList.test.tsx` includes:
- add todo
- toggle todo
- delete todo
- uses `userEvent`

## Submission Checklist Mapping

- Jest works: configured and verified via local test run.
- Tests exist for add/delete/toggle: present in `TodoList.test.tsx`.
- `userEvent` is used: present in tests.
- Deployment config is prepared: Vite + Vercel config added.
- CI works: workflow added for push to `main`.

## Validation Results

Executed from `lab10`:

- `npm test` -> passed (4/4 tests)
- `npm run build` -> passed

## Deployment Steps

From `lab10/testing-app`:

```bash
npm install -g vercel
vercel login
vercel
```

After deployment, place the production URL in your final submission/report.