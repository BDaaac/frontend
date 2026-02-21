# AI Report for Lab 06

This report details the work completed for Lab 06, focusing on the implementation of client-side routing in a React application using `react-router-dom`. The project is divided into two main tasks as specified in the lab requirements.

## Lab 6.1: Multi-Page Application with React Router

**Objective:** Build a basic multi-page "Student Portal" with a shared layout and navigation.

### Key Implementations:

1.  **Project Setup and Routing:**
    *   A new Vite + React project with TypeScript was initialized.
    *   The `react-router-dom` library was installed to handle navigation.
    *   In `main.tsx`, the core routing logic was configured using `createBrowserRouter`. This setup defines the application's URL structure.

2.  **Route Configuration:**
    *   A nested route structure was created with a root layout route.
    *   The main routes defined are:
        *   `/`: The home page (`Home.tsx`).
        *   `/courses`: The course listing page (`Courses.tsx`).
        *   `/about`: The about page (`About.tsx`).
        *   `*`: A catch-all route that renders a `NotFound.tsx` component for any unmatched URLs, ensuring a friendly 404 page.

3.  **Shared Layout (`Layout.tsx`):**
    *   A `Layout.tsx` component was created to provide a consistent structure across all pages.
    *   It includes a navigation bar (`<nav>`) with `Link` components for navigating between the Home, Courses, and About pages without full-page reloads.
    *   An `<Outlet />` component is used within the layout to render the content of the matched child route.

4.  **Page Components:**
    *   Individual components for each page (`Home.tsx`, `Courses.tsx`, `About.tsx`, `NotFound.tsx`) were created to display the specific content for each route.

## Lab 6.2: Route Parameters & Dynamic Pages

**Objective:** Extend the application to handle dynamic routes for displaying details of specific courses and to implement query parameters for sorting.

### Key Implementations:

1.  **Dynamic Course Details Page:**
    *   A dynamic route `/courses/:id` was added to the router configuration in `main.tsx`.
    *   A `CourseDetail.tsx` component was created to display information for a single course. It uses the `useParams` hook to retrieve the course `id` from the URL.

2.  **Data Loading with `loader`:**
    *   A `loader` function was implemented for the `/courses/:id` route. This function fetches the specific course data from `data.ts` *before* the `CourseDetail` component renders.
    *   The `useLoaderData` hook is used in the component to access the pre-fetched course data, providing an efficient data-loading pattern.
    *   An `errorElement` was also configured to gracefully handle cases where a course with the given `id` is not found.

3.  **Course List with Dynamic Links:**
    *   The `Courses.tsx` component was updated to fetch a list of courses from `data.ts`.
    *   Each course in the list is rendered as a `Link` component, dynamically pointing to its detail page (e.g., `/courses/1`, `/courses/2`).

4.  **Sorting with Query Parameters:**
    *   Functionality to sort the course list was added to `Courses.tsx`.
    *   The `useSearchParams` hook is used to get and set the `sort` query parameter in the URL (e.g., `?sort=asc`).
    *   A button was added to toggle the sorting order between ascending and descending, demonstrating how to manipulate query parameters to control component state.
    *   Basic CSS was added to improve the visual presentation of the course list and sorting button.

This completes the requirements for Lab 06, resulting in a functional multi-page React application with dynamic routing and data handling.