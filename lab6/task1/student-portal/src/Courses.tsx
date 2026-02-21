interface Course {
  id: number;
  title: string;
}

const courses: Course[] = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "TypeScript Fundamentals" },
  { id: 3, title: "Web Development" },
];

function Courses() {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  );
}

export default Courses;