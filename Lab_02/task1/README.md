# Lab 2.1: Fragments & List Mapping

This React (Vite) app demonstrates:
- Fragment-only layout (`FragmentLayout`)
- Mapping an array to a list (`ItemList`)
- Combined fragment + list with total (`CombinedList`)

## Run
```bash
npm install
npm run dev
```
Open the shown localhost URL.

## Components
- `FragmentLayout`: header/main/footer grouped via fragment only
- `ItemList`: maps `items` to `<li>` with proper `key`
- `CombinedList`: fragment containing `<h2>`, `ItemList`, and summary using `items.length`
