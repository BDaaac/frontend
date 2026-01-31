1. Информация об использовании AI
Инструмент: Google Gemini 
Дата: 31.01.2026
2. Конкретные промпты и полученная помощь
Промпт 1:
" какая структура файлов должна быть “

Результат: ИИ объяснил, какая структура задания должно быть

Промпт 2:
" окей task 3.1 как сделать”

Результат: Получил концептуальное объяснение для Task 3_1 и какие файлы я должен добавить и какие функции должен реализовать

Промпт 3:
"так стоп поподробнее начни сперва структуры папок по типу task_3_1"

Результат: ИИ показал подробную структуру Lab_03/
├── task1/                  # Лабораторная 3.1: Step Counter
│   ├── src/
│   │   ├── components/
│   │   │   ├── StepCounter.jsx
│   │   │   └── CounterApp.jsx
│   │   └── App.jsx
│   ├── README.md           # Описание для Task 1 
│   └── package.json
├── task2/                  # Лабораторная 3.2: User Profile
│   ├── src/
│   │   ├── components/
│   │   │   └── UserProfile.jsx
│   │   └── App.jsx
│   ├── README.md           # Описание для Task 2 [cite: 133]
│   └── package.json
└── AI_REPORT.md            # Обязательный отчет об использовании ИИ [cite: 157]

Промпт 4:
" sktop\it\unc\frontend\lab_03> cd task_3_1
PS C:\Users\Димаш\Desktop\it\unc\frontend\lab_03\task_3_1> npm install
npm error code ENOENT
npm error syscall open
npm error path C:\Users\Димаш\Desktop\it\unc\frontend\lab_03\task_3_1\package.json
npm error errno -4058
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open 'C:\Users\Димаш\Desktop\it\unc\frontend\lab_03\task_3_1\package.json'
npm error enoent This is related to npm not being able to find a file.
npm error enoent
npm error A complete log of this run can be found in: C:\Users\Димаш\AppData\Local\npm-cache\_logs\2026-01-31T04_01_09_236Z-debug-0.log
PS C:\Users\Димаш\Desktop\it\unc\frontend\lab_03\task_3_1> "

Результат: Получил разъяснение что за ошибка и как его исправить.

Промт 5:
[plugin:vite:import-analysis] Failed to resolve import "./App.tsx" from "src/main.tsx". Does the file exist?
C:/Users/Димаш/Desktop/it/unc/frontend/Lab_03/task_3_1/task_3_1/src/main.tsx:4:16
3  |  import { createRoot } from "react-dom/client";
4  |  import "./index.css";
5  |  import App from "./App.tsx";
   |                   ^
6  |  createRoot(document.getElementById("root")).render(
7  |    /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    at TransformPluginContext._formatLog (file:///C:/Users/%D0%94%D0%B8%D0%BC%D0%B0%D1%88/Desktop/it/unc/frontend/Lab_03/task_3_1/task_3_1/node_modules/vite/dist/node/chunks/config.js:28999:43)
    at TransformPluginContext.error (file:///C:/Users/%D0%94%D0%B8%D0%BC%D0%B0%D1%88/Desktop/it/unc/frontend/Lab_03/task_3_1/task_3_1/node_modules/vite/dist/node/chunks/config.js:28996:14)
    at normalizeUrl (file:///C:/Users/%D0%94%D0%B8%D0%BC%D0%B0%D1%88/Desktop/it/unc/frontend/Lab_03/task_3_1/task_3_1/node_modules/vite/dist/node/chunks/config.js:27119:18)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async file:///C:/Users/%D0%94%D0%B8%D0%BC%D0%B0%D1%88/Desktop/it/unc/frontend/Lab_03/task_3_1/task_3_1/node_modules/vite/dist/node/chunks/config.js:27177:32
    at async Promise.all (index 4)
    at async TransformPluginContext.transform (file:///C:/Users/%D0%94%D0%B8%D0%BC%D0%B0%D1%88/Desktop/it/unc/frontend/Lab_03/task_3_1/task_3_1/node_modules/vite/dist/node/chunks/config.js:27145:4)
    at async EnvironmentPluginContainer.transform (file:///C:/Users/%D0%94%D0%B8%D0%BC%D0%B0%D1%88/Desktop/it/unc/frontend/Lab_03/task_3_1/task_3_1/node_modules/vite/dist/node/chunks/config.js:28797:14)
    at async loadAndTransform (file:///C:/Users/%D0%94%D0%B8%D0%BC%D0%B0%D1%88/Desktop/it/unc/frontend/Lab_03/task_3_1/task_3_1/node_modules/vite/dist/node/chunks/config.js:22670:26)
Click outside, press Esc key, or fix the code to dismiss.
Результат: Гемини подсказал что ошибка в том что я переместил app.jtx не в ту директорию. 
Промт 6:
‘что я реализовал по задание проверь но код не меняй’
Резултат: ии проверил мой проект и дал оценку 100 из 100
3. Модификация и проверка
Я не просто копировал код, а адаптировал его под требования лабы: добавил обязательные комментарии к функциям useState и кнопкам.
Самостоятельно исправил конфликты файлов, когда пытался запустить create-react-app поверх Vite.
Проверил работоспособность обоих приложений (jQuery и React) в браузере.
4. Что я узнал (Key Learnings)
Декларативность: Узнал, что в React мы описываем "что" хотим видеть, а не "как" это сделать пошагово.
State Management: Научился использовать хук useState для создания реактивных интерфейсов.
Project Setup: Освоил профессиональную настройку окружения через Vite.
5. Процент использования
~50% (AI использовался как справочник по синтаксису и для разъяснения и ошибок).

