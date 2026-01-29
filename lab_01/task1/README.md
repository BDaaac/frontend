# Lab 1.1: Declarative vs Imperative Implementation

## Task 1: Imperative Implementation (jQuery)

### Как запустить:
1. Откройте `lab_1_1/index.html` в браузере
2. Или используйте локальный сервер:
   ```
   # В папке task1/lab_1_1
   python -m http.server 8000
   # Откройте http://localhost:8000
   ```

### Что реализовано:
- Кнопка "Toggle Highlight" 
- Параграф с текстом
- jQuery обработчик события клика
- CSS класс `.highlight` с желтым фоном
- Использование `toggleClass()` для добавления/удаления класса

## Task 2: Declarative Implementation (React)

### Как запустить:
1. Перейдите в папку `lab_1_2`
2. Установите зависимости: `npm install`
3. Запустите проект: `npm run dev`
4. Откройте браузер по адресу, указанному в терминале (обычно http://localhost:5173)

### Что реализовано:
- Тот же функционал что и в jQuery версии
- Использование `useState` для управления состоянием
- Декларативное описание UI через JSX
- Автоматическое обновление DOM через React
- Нет прямых манипуляций с DOM

### Технические детали:
- **Node.js**: v18+
- **React**: 19.2.0
- **Vite**: 7.2.4
- **TypeScript**: 5.9.3

### Структура проекта:
- `src/App.tsx` - основной компонент с логикой toggle
- `src/App.css` - стили (включая `.highlight` класс)
- `package.json` - зависимости и скрипты