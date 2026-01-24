Lab 02: JSX, Fragments & Expressions
Week 2 Assignment
Student Name: 	Date: 	

Overview
Total Points: 100 (50 points per lab)
Required Reading: React and React Native, Fifth Edition by Sakhniuk & Boduch (Packt 2024) Chapter 2: “Rendering with JSX” — “Your first JSX content”, “Rendering HTML”, “Creating your own JSX elements”, “Using JavaScript expressions”, “Building fragments of JSX”

 
1.	Lab 2.1: Fragment Drill & List Mapping (50 Points)
Objective
Build a layout using only fragments (no extra wrapper <div>s) and use JSX expressions to map an array to a list of elements. This practises Ch. 2, “Building fragments of JSX” and “Using JavaScript expressions”.

Background
React components must return a single parent. Often we use <div>, which adds unnecessary markup. Fragments (<>...</>) group siblings without extra nodes. Mapping arrays to elements is a common pattern for lists.

Tasks
Task 1: Fragment-Only Layout (20 points)
1.	Create a React component (e.g. FragmentLayout) that returns exactly three sibling ele- ments:
•	A <header> with a title (e.g. “Fragment Layout”)
•	A <main> with a short paragraph
•	A <footer> with a copyright line
2.	Use only <>...</> (or <React.Fragment>) to wrap them. No <div> or other wrapper around the three.
3.	Verify in DevTools that the DOM has no extra wrapper div between the component root and header/main/footer.
Task 2: Mapping Array to List (20 points)
1.	Define an array of items, e.g.:
•	const items = [ { id:  1, name:  Apple  }, { id:  2, name:  Banana  },
{ id:  3, name:  Cherry  } ];
•	Or a list of your choice (books, tasks, etc.) with at least 3 entries.
2.	Create a component (e.g. ItemList) that:
•	Uses .map() to render each item as a <li> inside a <ul>.
•	Uses key={item.id} (or a unique key) on each <li>.
•	Displays each item’s relevant fields (e.g. item.name) using JSX expressions {}.
3.	Render ItemList in your App (or a parent page). No errors in console about keys.
Task 3: Combined Fragment + List (10 points)
1.	Create a single component that:
•	Returns a fragment containing: (1) a <h2> title, (2) your ItemList (or inline <ul> with
.map()), (3) a <p> summary (e.g. “Total: X items”).
2.	Use only fragments for grouping. The “Total” must use the array length (e.g. items.length) via an expression.
 
Deliverable
Submit:
•	React project (or relevant source files) with FragmentLayout, ItemList, and the com- bined component.
•	Brief README: how to run, which components implement which tasks.
•	Optional: screenshot of the rendered UI and DevTools showing no extra wrapper.

 
2.	Lab 2.2: Custom JSX Elements & Dynamic Props (50 Points)
Objective
Create custom React components, use JSX expressions for dynamic props and content, and avoid unnecessary wrappers using fragments. This aligns with Ch. 2, “Creating your own JSX elements” and “Using JavaScript expressions”.

Background
Custom components encapsulate HTML and logic. Props passed as attributes can be dy- namic (e.g. title={name}). The book emphasises expressions in {} for values and mapping collections.

Tasks
Task 1: Reusable Card Component (15 points)
1.	Create a Card component that accepts props: title, children (and optionally className).
2.	Structure: a <div> (or <article>) with a <h3> for title and children for body content.
3.	Use JSX expressions for title and className (e.g. combine card with optional className
prop).
4.	Render at least two <Card> instances with different titles and body text.
Task 2: ProductList with Mapping (20 points)
1.	Define an array of products, e.g. [ { id: 1, name:  Widget , price: 9.99 }, ...
].
2.	Create a ProductList component that:
•	Maps over the array and renders each product (use your Card or a simple <div> per product).
•	Displays name, price, and uses id as key.
•	Uses only expressions {} for dynamic content; no string concatenation outside JSX.
3.	Ensure the list renders without key warnings.
Task 3: Fragment-Based Section (15 points)
1.	Create a Section component that returns a fragment containing:
•	A <h2> with a title prop
•	children (so you can nest ProductList or other content)
2.	Use <>...</>; no wrapper <div>.
3.	Compose App (or a page) as: <Section title= Products > with <ProductList /> in- side. Use fragments where appropriate to avoid extra divs.

Technical Requirements
•	React 18+; function components only.
•	Use className (not class) for CSS classes.
•	Consistent naming (camelCase) and brief comments.
 
Deliverable
Submit:
•	React project with Card, ProductList, Section, and composition in App.
•	README with run instructions and component overview.

Submission Requirements and Regulations




Submission Instructions
1.	Lab 2.1: React project (fragments + list) + README.
 
2.	Lab 2.2: React project (Card, ProductList, Section) + README.
3.	Use Lab_02/task1/, Lab_02/task2/ where applicable.
4.	Name, student ID, date. Course portal. OquLabs logs available.

Implementation Notes (Completed)
- Lab 2.1 project: [Lab_02/task1](Lab_02/task1) — key files:
	- [App.jsx](Lab_02/task1/src/App.jsx)
	- [FragmentLayout.jsx](Lab_02/task1/src/components/FragmentLayout.jsx)
	- [ItemList.jsx](Lab_02/task1/src/components/ItemList.jsx)
	- [CombinedList.jsx](Lab_02/task1/src/components/CombinedList.jsx)
- Lab 2.2 project: [Lab_02/task2](Lab_02/task2) — key files:
	- [App.jsx](Lab_02/task2/src/App.jsx)
	- [Card.jsx](Lab_02/task2/src/components/Card.jsx)
	- [ProductList.jsx](Lab_02/task2/src/components/ProductList.jsx)
	- [Section.jsx](Lab_02/task2/src/components/Section.jsx)

Run Instructions
```bash
cd Lab_02/task1
npm install
npm run dev

cd ../task2
npm install
npm run dev
```

Comprehensive Assessment Summary

Category	Points	Assessment
Lab 2.1 Tasks	50	See Lab 2.1 Rubric
Lab 2.2 Tasks	50	See Lab 2.2 Rubric
Code runs	20	[YES] / [NO] (-20)
Naming	10	[YES] / [NO] (-5)
Comments	10	[YES] / [NO] (-10)
OquLabs: Full screen	10	[YES] / [NO] (-20)
OquLabs: No copy-paste	10	[YES] / [NO] (-30)
OquLabs: Duration > 30 min	10	[YES] / [NO] (-10)
Git: Folder structure	5	[YES] / [NO] (-10)
Git: Conventional commits	5	[YES] / [NO] (-5)
TOTAL	100	

