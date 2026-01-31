import React, { useState } from 'react';
import UserProfile from './components/UserProfile';

function App() {
  const [userId, setUserId] = useState(1); // [cite: 119]

  return (
    <div>
      <h1>Lab 3.2: Data Loading</h1>
      <div>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
      </div>
      
      <UserProfile userId={userId} />

      {/* Task 3.3: Обязательное объяснение [cite: 122, 134] */}
      <p><i>Explanation: userId включен в массив зависимостей useEffect, чтобы при каждом изменении ID хук заново запускал fetch и обновлял данные конкретного пользователя.</i></p>
    </div>
  );
}

export default App;