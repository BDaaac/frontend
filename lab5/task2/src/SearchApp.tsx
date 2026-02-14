import React, { useState } from "react";
import type { User } from "./types";

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 22 },
  { name: "David", email: "david@mail.com", age: 28 },
  { name: "Emma", email: "emma@mail.com", age: 26 },
];

const SearchApp = () => {
  // ✅ Typed state (важно!)
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] =
    useState<User[]>(INITIAL_DATA);

  const [searchTerm, setSearchTerm] = useState<string>("");

  // ✅ Typed ChangeEvent
  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;
    setSearchTerm(term);

    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  // ✅ Typed MouseEvent
  const handleClear = () => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Search</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name"
      />

      <button onClick={handleClear}>
        Clear
      </button>

      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        filteredUsers.map((user) => (
          <div key={user.email}>
            {user.name} — {user.email} — Age: {user.age}
          </div>
        ))
      )}
    </div>
  );
};

export default SearchApp;
