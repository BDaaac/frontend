# Lab 1.2: React Project Setup & Counter Component

## Project Setup

### Технические характеристики:
- **Инструмент**: Vite 7.2.4
- **React**: 19.2.0 (последняя стабильная версия)
- **TypeScript**: 5.9.3 
- **Node.js**: v18+ рекомендуется

### Команды для создания проекта:
```bash
# Создание проекта
npm create vite@latest my-app -- --template react-ts

# Установка зависимостей
cd my-app
npm install

# Запуск в dev режиме
npm run dev

# Сборка для продакшена
npm run build
```

## Counter Component

### Как запустить:
1. Перейдите в папку `my-app`
2. Выполните `npm install` (если еще не установлены зависимости)
3. Запустите `npm run dev`
4. Откройте браузер по адресу http://localhost:5173

### Реализованный функционал:
- ✅ Отображение числового значения (начальное значение 0)
- ✅ Кнопка "Increment" для увеличения на 1
- ✅ Кнопка "Decrement" для уменьшения на 1
- ✅ Использование `useState` hook для управления состоянием
- ✅ Автоматическое обновление UI при изменении состояния

### Архитектура:
- **View Layer**: React отображает UI основываясь на текущем состоянии
- **State Management**: Hook `useState` управляет локальным состоянием
- **Event Handling**: Обработчики onClick обновляют состояние
- **Re-rendering**: React автоматически перерендерит компонент при изменении state

### Структура файлов:
```
my-app/
├── src/
│   ├── App.tsx          # Главный компонент с Counter логикой
│   ├── main.tsx         # Точка входа в приложение
│   ├── App.css          # Стили
│   └── index.css        # Глобальные стили
├── public/              # Статические ресурсы
├── package.json         # Конфигурация проекта
├── vite.config.ts       # Конфигурация Vite
└── tsconfig.json        # Конфигурация TypeScript
```