import { useState } from 'react'

function App() {
  // Инициализируем состояние счетчика со значением 0
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lab 1.2: Counter Component</h1>
      
      {/* Отображаем текущее состояние */}
      <div className="card">
        <h2>Count is {count}</h2>
        
        {/* Кнопки вызывают функции обновления состояния */}
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increment
        </button>
        
        <button 
          onClick={() => setCount((prev) => prev - 1)}
          style={{ marginLeft: '10px' }}
        >
          Decrement
        </button>
      </div>

      <p>
        React работает как View Layer: при нажатии на кнопки меняется 
        состояние (state), и React автоматически обновляет только нужную часть DOM.
      </p>
    </div>
  )
}

export default App