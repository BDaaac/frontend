import React, { useState } from 'react';

// Task 1: Компонент принимает пропсы initialValue и step [cite: 30, 31, 32]
const StepCounter = ({ initialValue = 0, step = 1 }) => {
  
  // Task 1 & 2: Состояния [cite: 33, 38, 39, 40]
  const [count, setCount] = useState(initialValue); 
  const [history, setHistory] = useState([]); 
  const [operationCount, setOperationCount] = useState(0);

  // Логика нажатия кнопок [cite: 41, 42, 43, 44]
  const handleUpdate = (amount) => {
    const nextValue = count + amount;
    setCount(nextValue);
    setHistory([...history, nextValue]); // Добавляем в историю
    setOperationCount(prev => prev + 1); // Увеличиваем счетчик операций
  };

  // Task 2: Функция сброса [cite: 49, 53, 54]
  const handleReset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}>
      {/* Task 1: Отображение текущего счета [cite: 34] */}
      <h3>Count: {count}</h3>
      <p>Operations: {operationCount}</p>
      
      {/* Кнопки инкремента и декремента [cite: 35] */}
      <button onClick={() => handleUpdate(step)}>Increment (+{step})</button>
      <button onClick={() => handleUpdate(-step)}>Decrement (-{step})</button>
      <button onClick={handleReset}>Reset</button>

      {/* Task 2: Вывод последних 5 значений [cite: 48] */}
      <div>
        <h4>History (Last 5):</h4>
        <ul>
          {history.slice(-5).map((val, idx) => (
            <li key={idx}>{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StepCounter;