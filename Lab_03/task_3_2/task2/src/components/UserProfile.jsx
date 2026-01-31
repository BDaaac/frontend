import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  // Task 1: Состояния для данных, загрузки и ошибок [cite: 92]
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Task 2: Использование AbortController для очистки [cite: 105]
    const controller = new AbortController();
    
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        const data = await response.json();
        setUser(data); // Успех [cite: 97]
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message); // Ошибка [cite: 98]
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Task 2: Функция очистки [cite: 106, 114]
    return () => controller.abort();
    
    // Task 3: userId в массиве зависимостей [cite: 116]
  }, [userId]); 

  if (loading) return <p>Loading...</p>; // [cite: 100]
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>; // [cite: 101]

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px' }}>
      {/* Task 1.3: Вывод данных [cite: 102] */}
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Phone:</strong> {user?.phone}</p>
    </div>
  );
};

export default UserProfile;