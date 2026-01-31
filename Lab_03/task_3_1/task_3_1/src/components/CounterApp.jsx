import React from 'react';
import StepCounter from './StepCounter';

const CounterApp = () => {
  return (
    <div>
      <h2>Lab 3.1: Advanced Counter</h2>
      
      {/* Task 3: Два независимых экземпляра с разными пропсами [cite: 56, 57, 58, 59] */}
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />

      {/* Task 3.3: Обязательный комментарий [cite: 60, 70] */}
      <div style={{ marginTop: '20px', fontStyle: 'italic' }}>
        <p>
          <strong>Explanation:</strong> Props (initialValue, step) - это внешние 
          параметры, передаваемые родителем, они доступны только для чтения. 
          State (count, history) - это внутренние данные компонента, которые 
          он может изменять сам. Когда state меняется, React перерисовывает 
          конкретный экземпляр компонента.
        </p>
      </div>
    </div>
  );
};

export default CounterApp;