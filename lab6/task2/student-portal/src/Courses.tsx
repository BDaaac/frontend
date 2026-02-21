import { Link, useSearchParams } from "react-router-dom";
import { courses } from "./data";
import './App.css';

function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") || "asc";

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const toggleSortOrder = () => {
    setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" });
  };

  return (
    <div className="courses-container">
      <h2 className="courses-title">Our Courses</h2>
      <button onClick={toggleSortOrder} className="sort-button">
        Sort by Title ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <ul className="courses-list">
        {sortedCourses.map((course) => (
          <li key={course.id} className="course-item">
            <Link to={`/courses/${course.id}`} className="course-link">
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;