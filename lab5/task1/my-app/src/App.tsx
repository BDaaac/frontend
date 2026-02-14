import UserCard from "./UserCard";
import SkillList from "./SkillList";
import type { User, Skill } from "./types";

function App() {
  const user: User = {
    name: "Alice",
    email: "alice@mail.com",
    age: 25,
  };

  const skills: Skill[] = [
    { id: 1, name: "React", level: "Expert" },
    { id: 2, name: "TypeScript", level: "Intermediate" },
    { id: 3, name: "CSS", level: "Beginner" },
  ];

  return (
    <>
      <UserCard user={user}>
        <p>Status: Active developer</p>
      </UserCard>

      <SkillList skills={skills} />
    </>
  );
}

export default App;
