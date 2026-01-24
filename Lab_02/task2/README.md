# Lab 2.2: Custom JSX Elements & Dynamic Props

This React (Vite) app demonstrates:
- `Card` component with dynamic `title`, `className`, and `children`
- `ProductList` mapping products and using `id` as key
- `Section` component returning a fragment and composing the page

## Run
```bash
npm install
npm run dev
```
Open the shown localhost URL.

## Components
- `Card`: `<article>` with `<h3>` and `children`, className handled via expression
- `ProductList`: maps `products` to `Card` components; keys from `id`
- `Section`: fragment returning `<h2>` + `children`; used to wrap `ProductList`
