# AI Report - Lab 11

## Objective

Fix `npm run dev` errors in `lab11/task1` and `lab11/task2` and verify startup scripts.

## Problem

Both projects are Expo apps and had these scripts:
- `start`
- `android`
- `ios`
- `web`

But `dev` script was missing, so `npm run dev` failed with:
- `npm error Missing script: "dev"`

## Changes Made

1. Updated `lab11/task1/package.json`:
   - Added script: `"dev": "expo start"`

2. Updated `lab11/task2/package.json`:
   - Added script: `"dev": "expo start"`

3. Added this report file:
   - `lab11/AI_Report.md`

## Why This Fix Works

In Expo projects, development server is started via `expo start`. Adding `dev` as an alias makes `npm run dev` behave as expected while preserving existing scripts.

## Validation

- Verified that both package files now include a `dev` script.
- After this change, command `npm run dev` is valid in both folders:
  - `lab11/task1`
  - `lab11/task2`

## Notes

If you prefer, you can still use `npm run start`; now both commands start the same Expo dev server.
