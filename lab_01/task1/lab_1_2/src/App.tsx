import { useState } from 'react'
import './App.css'

function App() {
  // Декларативное состояние: описываем что хотим (isHighlighted: true/false)
  // вместо того как это делать (addClass/removeClass)
  const [isHighlighted, setIsHighlighted] = useState(false)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lab 1.1: Declarative Implementation (React)</h1>
      
      {/* React автоматически применяет className при изменении состояния */}
      <p className={isHighlighted ? 'highlight' : ''}>
        This is the text to highlight.
      </p>
      
      {/* Обработчик меняет состояние, React обновляет UI автоматически */}
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle Highlight
      </button>

      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <p>Текущее состояние: {isHighlighted ? 'Выделено' : 'Не выделено'}</p>
        <p>React declarative: описываем "что" хотим видеть, не "как" это сделать</p>
      </div>
    </div>
  )
}

export default App
