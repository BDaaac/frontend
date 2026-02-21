Lab 06: React Router & Navigation
Week 6 Assignment (16.02–22.02.2026)
Student Name: 	Date: 	

Overview
Total Points: 100 (50 points per lab)
Required Reading: React and React Native, Fifth Edition by Sakhniuk & Boduch (Packt 2024)
Chapter 7: “Handling Navigation with Routes” (pp. 105–120)
Sections to read: Technical requirements (p. 105), Declaring routes (p. 106), Hello route (p. 106), Decoupling route declarations (p. 108), Handling route parameters (p. 110), Resource IDs in routes (p. 111), Query parameters (p. 114), Using link components (p. 116), Basic linking (p. 117), URL and query parameters (p. 118)
Key Vocabulary
•	createBrowserRouter: Function that creates a router from an array of route con- figuration objects. Each route has a path and element property (Ch. 7, p. 106).
•	RouterProvider: The top-level component that receives the router created by
createBrowserRouter and renders the matched route’s component (Ch. 7, p. 107).
•	Outlet: A built-in react-router component placed inside a layout that will be re- placed with the matched child route’s element (Ch. 7, p. 109).
•	useParams: Hook that returns an object of key/value pairs of the dynamic URL segments. E.g., for route /users/:id, calling useParams() returns {id: "1"} (Ch. 7, p. 112).
•	useSearchParams:   Hook  that  returns  query  string  parameters  as a URLSearchParams object. E.g., for URL /?order=desc, you call search.get("order") (Ch. 7, p. 115).
•	useLoaderData: Hook that returns data loaded by a route’s loader function, which runs before the component renders (Ch. 7, p. 112).
•	Link: Component that navigates using the client-side router instead of sending a GET request to the server. Use to prop instead of href (Ch. 7, p. 117).
•	errorElement: A fallback component rendered when a route’s loader throws an error or the route is not found (Ch. 7, p. 111).
 
1.	Lab 6.1: Multi-Page Application with React Router (50 Points)
Objective
Build a multi-page React application using react-router-dom v6. Students will learn to declare routes using createBrowserRouter, create a shared layout with Outlet, and navigate between pages using Link components. This aligns with Ch. 7, “Declaring routes” (p. 106) and “Using link components” (p. 116).

Background
Ch. 7 opens with the concept that a router’s job is to render content that corresponds to a URL. The react-router package is the standard tool for this. Routes are declared as configuration objects, and the RouterProvider component connects root rendering to the router. The book emphasizes that each top-level feature of the application can define its own routes so it’s clear which routes belong to which feature (p. 108). See Appendix A for the book’s route declaration example and Appendix B for the Layout with Outlet pattern.

Problem Statement
Build a simple “Student Portal” with the following pages:
•	Home (/) — welcome message and links to other pages
•	Courses (/courses) — list of courses (hardcoded data is fine)
•	About (/about) — about the university/program
•	Not Found (*) — a “404 Not Found” page for any unmatched URL
All pages share a common navigation bar and footer rendered via a Layout component.

Tasks
Task 1: Project Setup and Route Configuration (15 points)
1.	Create a new React TypeScript project and install react-router:


2.	In main.tsx, declare routes using createBrowserRouter (Ch. 7, p. 106):

 

 
3.	Reference: Ch. 7, “Hello route” (p. 106), “Decoupling route declarations” (p. 108). See
Appendix A.
Task 2: Layout with Navigation and Outlet (20 points)
1.	Create a Layout.tsx component that renders:
•	A <nav> bar with Link components (not <a> tags!)  pointing to /, /courses, and
/about
•	An <Outlet /> component where child routes will render (Ch. 7, p. 109)
•	A simple <footer>


2.	Important: The book warns against using standard <a> elements because they “will try to locate the page on the backend by sending a GET request” instead of handling routes locally (Ch. 7, p. 116). Always use <Link>.
3.	Add basic CSS styling to your navigation (flexbox or similar). Make the active page’s link visually distinct (optional: use NavLink with className callback).
4.	Reference: Ch. 7, “Basic linking” (p. 117). See Appendix B. Task 3: Page Components and 404 Handler (15 points)
1.	Create simple page components in separate files:
•	Home.tsx — welcome text, maybe a hero section
•	Courses.tsx — a list of 3–5 hardcoded courses (use TypeScript interface for course data)
•	About.tsx — descriptive paragraph about the program
 
•	NotFound.tsx — “404 — Page Not Found” message with a link back to Home
2.	Verify that navigating to an unknown URL (e.g., /xyz) displays the NotFound component.
3.	All components must use TypeScript (.tsx files) with proper types (reuse knowledge from Lab 5).

Deliverable
•	Vite + React TS project with: main.tsx, Layout.tsx, Home.tsx, Courses.tsx, About.tsx, NotFound.tsx
•	Navigation works without full page reloads (client-side routing)
•	404 page renders for unknown URLs
•	Brief README explaining your route structure

 
2.	Lab 6.2: Route Parameters & Dynamic Pages (50 Points)
Objective
Extend the application from Lab 6.1 to include dynamic route parameters (/courses/:id) and query parameters (?sort=asc). Students will use the useParams, useLoaderData, and useSearchParams hooks. This aligns with Ch. 7, “Handling route parameters” (p. 110) and “Query parameters” (p. 114).

Background
Ch. 7 explains that “the : syntax marks the beginning of a URL variable” (p. 111). The variable is passed to the component and retrieved with the useParams() hook. For data loading, the book introduces loader functions that run before the component renders, providing data via the useLoaderData() hook (p. 111). Query parameters are handled by the useSearchParams() hook, which returns a URLSearchParams object (p. 115). See Appendix C for the book’s useParams example and Appendix D for query parameters.

Problem Statement
Extend the “Student Portal” so that:
•	The Courses page lists courses as clickable links
•	Clicking a course navigates to /courses/:id showing details
•	The course list supports sorting via query parameter ?sort=asc|desc
•	Invalid course IDs show a user-friendly error page

Tasks
Task 1: Dynamic Route with useParams (20 points)
1.	Define TypeScript interfaces for your data:


2.	Create a mock data file data.ts with at least 4 courses.
3.	Add a new route with a dynamic segment:

 

 

4.	In CourseDetail.tsx, use useParams() and useLoaderData() to display the course:


5.	Reference: Ch. 7, “Resource IDs in routes” (p. 111). See Appendix C. Task 2: Course List with Links (15 points)
1.	Update Courses.tsx to render each course as a Link to /courses/{id}:


2.	The book shows that “constructing the dynamic segments of a path that is passed to
<Link> involves string manipulation” using template literals (Ch. 7, p. 118). See Ap- pendix E.
3.	Verify that clicking a course link navigates to the detail page without a full page reload.
4.	Verify that navigating to /courses/999 (nonexistent) shows the error element.
Task 3: Query Parameters for Sorting (15 points)
1.	Add sorting functionality to the Courses page using useSearchParams (Ch. 7, p. 114):
 

 

2.	The book notes: “There is no special setup in the router for handling query parameters. It’s up to the component to handle any query strings provided to it” (Ch. 7, p. 115).
3.	Verify: clicking the Sort button toggles the URL between /courses?sort=asc and /courses?sort=desc, and the list re-orders accordingly.
4.	Reference: Ch. 7, “Query parameters” (p. 114). See Appendix D.

Deliverable
•	Extended project from Lab 6.1 with: data.ts, CourseDetail.tsx, updated Courses.tsx, updated routes in main.tsx
•	Dynamic route /courses/:id works correctly
•	?sort=asc|desc query parameter works
•	Invalid IDs show error element
•	README explaining: what useParams vs useSearchParams is, when to use URL params vs query params
 

 
 
Submission Requirements and Regulations




Submission Instructions
1.	Lab 6.1: Multi-page app (Layout.tsx, page components, route config) + README.
2.	Lab 6.2: Extended app (CourseDetail.tsx, data.ts, updated routes) + README.
3.	Use Lab_06/task1/, Lab_06/task2/ structure.
4.	Include name, student ID, date. Submit via course portal. Ensure OquLabs logs are available.
 
Comprehensive Assessment Summary

Category	Points	Assessment
Lab 6.1 Tasks	50	See Lab 6.1 Rubric
Lab 6.2 Tasks	50	See Lab 6.2 Rubric
Code compiles (zero TS errors)	20	[YES] / [NO] (-20)
TypeScript strict mode	10	[YES] / [NO] (-5)
Zero any usage	10	[YES] / [NO] (-5 per any)
OquLabs: Full screen	10	[YES] / [NO] (-20)
OquLabs: No copy-paste	10	[YES] / [NO] (-30)
OquLabs: Duration > 30 min	10	[YES] / [NO] (-10)
Git: Folder structure	5	[YES] / [NO] (-10)
Git: Conventional commits	5	[YES] / [NO] (-5)
TOTAL	100	
 
A.	Declaring Routes — createBrowserRouter (Ch. 7, p. 106–107)
The book introduces routing by creating a router with createBrowserRouter, passing an array of route objects. Each route has a path and element property.

Key concept (p. 107): “When the path property is matched against the active URL, the component is rendered... the router checks the current URL and returns the corresponding component from the createBrowserRouter declaration.”

B.	Layout with Outlet and Nested Routes (Ch. 7, p. 108–109)
The book shows how to use a Layout component with an <Outlet /> to render child routes within a shared template.
 

 
Key concept (p. 109): “<Outlet /> is a built-in react-router component that will be re- placed with matched route elements.” The router only gets as big as the number of application features, not the number of routes.

C.	useParams and Route Loaders (Ch. 7, p. 111–113)
The book demonstrates fetching a resource by its URL segment ID using a loader function and useParams()/useLoaderData() hooks.
 

 

Key concept (p. 111): “The : syntax marks the beginning of a URL variable. The id variable will be passed to the UserContainer component.” The loader function is triggered before the component renders, fetching data asynchronously.

D.	Query Parameters with useSearchParams (Ch. 7, p. 114–115)
The book shows how to use query strings for sorting. The router does not explicitly declare query parameters; the component reads them with useSearchParams().
 

 
Key concept (p. 115): “There is no special setup in the router for handling query parame- ters. It’s up to the component to handle any query strings provided to it.” Use search.get("key") to read parameters.

E.	Dynamic Link Construction (Ch. 7, p. 118–119)
The book shows how to build dynamic links using template literals for URL parameters and
URLSearchParams for query strings.

 

 
Key concept (p. 118): “Constructing the dynamic segments of a path that is passed to
<Link> involves string manipulation. Everything that’s part of the path goes to the to property.”
