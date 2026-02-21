export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React Basics",
    instructor: "John Smith",
    description: "Intro to React."
  },
  {
    id: 2,
    title: "Advanced TypeScript",
    instructor: "Anna Brown",
    description: "Deep TypeScript concepts."
  },
  {
    id: 3,
    title: "Node.js",
    instructor: "Michael Lee",
    description: "Backend with Node."
  },
  {
    id: 4,
    title: "Databases",
    instructor: "Sarah Wilson",
    description: "SQL fundamentals."
  }
];

export function getCourseById(id: number): Course | undefined {
  return courses.find(c => c.id === id);
}