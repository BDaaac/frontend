# AI Report for Lab 07

This report describes the implementation of Lab 07, which focuses on **code splitting, lazy loading, Suspense fallback UI, and error handling using Error Boundaries** in a React application built with TypeScript and Vite. The work is divided into two main tasks according to the lab instructions.

---

# Lab 7.1: Lazy Loading Components with Suspense

**Objective:**
Implement code splitting in a React application using `React.lazy()` and `Suspense` to dynamically load page components only when they are needed.

### Key Implementations

### 1. Project Setup

A new **Vite + React + TypeScript** project was created. The routing library **react-router-dom** was installed to handle navigation between different pages.

The project structure includes:

* `pages/` folder for page components
* `components/` folder for reusable UI components
* `App.tsx` for routing configuration
* `main.tsx` for application initialization

The application was configured to use **React Router with BrowserRouter** for navigation.

---

### 2. Navigation System

A navigation menu was implemented in `App.tsx` using `Link` components from `react-router-dom`. This allows users to move between different pages without triggering a full page reload.

The main routes implemented are:

* `/` – Home page
* `/dashboard` – Dashboard page
* `/settings` – Settings page
* `/profile` – Profile page

The Home page loads normally, while the other pages are loaded lazily.

---

### 3. Lazy Loading with React.lazy()

Three page components were created:

* `Dashboard.tsx`
* `Settings.tsx`
* `Profile.tsx`

Instead of importing them normally, they were loaded using the `lazy()` function:

```javascript
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));
```

This technique splits the application bundle into smaller chunks that are loaded only when the user navigates to a specific route.

---

### 4. Suspense Fallback UI

The lazy-loaded components were wrapped inside a `Suspense` component.

A custom loading component called `LoadingSpinner` was created to provide visual feedback while the lazy components are loading.

Example:

```jsx
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    ...
  </Routes>
</Suspense>
```

The fallback UI contains:

* A loading message
* A CSS animated spinner

This improves the user experience by showing a loading indicator during dynamic imports.

---

# Lab 7.2: Error Handling with Error Boundaries

**Objective:**
Extend the application by implementing error handling for lazy-loaded components using React Error Boundaries.

---

### 1. ErrorBoundary Component

A custom `ErrorBoundary` class component was implemented.

Error Boundaries must be **class components** because they rely on lifecycle methods such as:

* `getDerivedStateFromError`
* `componentDidCatch`

The component tracks whether an error occurred using state:

```typescript
interface State {
  hasError: boolean;
}
```

When an error occurs in any child component, the ErrorBoundary displays a fallback UI instead of crashing the entire application.

---

### 2. Wrapping Lazy Components

The `ErrorBoundary` component wraps the `Suspense` component inside `App.tsx`.

Structure:

```
ErrorBoundary
   └── Suspense
          └── Routes
```

This ensures that errors thrown by lazy-loaded components are caught and handled gracefully.

---

### 3. Error Fallback UI

A simple fallback UI component was created to inform the user that something went wrong.

Example message displayed:

```
Something went wrong
```

A button was also added that allows the user to reload the page.

---

### 4. Retry Functionality

To improve usability, retry functionality was implemented inside the `ErrorBoundary`.

A `resetError()` method resets the error state:

```typescript
resetError = () => {
  this.setState({ hasError: false });
};
```

This allows the application to attempt rendering the components again without refreshing the entire browser page.

---

# Summary

Lab 07 demonstrates how modern React applications can improve performance and stability using advanced techniques.

The key concepts implemented include:

* **Code Splitting** to reduce initial bundle size
* **React.lazy()** for dynamic component loading
* **Suspense** for handling loading states
* **Error Boundaries** for catching runtime errors in component trees

These techniques are commonly used in production React applications to improve both **performance and reliability**.

The final application supports dynamic route loading, visual loading feedback, and graceful error recovery mechanisms.
