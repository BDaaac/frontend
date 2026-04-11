# AI Usage Report - Lab 06: React Router

**Tool Used:** Claude 3.5 Sonnet / ChatGPT / Gemini (оставь нужное)

### 1. Prompts Used
* "How to initialize React Router v6 using `createBrowserRouter` and `RouterProvider` in a Vite + React + TypeScript project?"
* "Show an example of a shared Layout component using `<Outlet />` and `<nav>` with `Link` components."
* "How to create a dynamic route (`/courses/:id`) and extract the ID using the `useParams` hook?"
* "Explain how to use React Router's `loader` function combined with `useLoaderData` to fetch course details before rendering."
* "How to implement ascending/descending sorting for a list using URL query parameters and the `useSearchParams` hook?"

### 2. How I modified and verified the code
* Сгенерированный код был адаптирован под требуемую структуру проекта и настроен на работу с локальным файлом `data.ts`.
* Я добавил строгую типизацию TypeScript (интерфейсы для объектов курсов и параметров загрузчика).
* Вручную протестировал навигацию: переходы между Home, Courses и About происходят без полной перезагрузки страницы (SPA).
* Проверил работу Catch-all роута (`*`), вводя несуществующие адреса для вызова компонента `NotFound`.
* Убедился, что при клике на сортировку в списке курсов URL корректно обновляется (добавляется `?sort=asc` или `desc`), а список перерисовывается в правильном порядке.

### 3. What I learned
* Освоил базовую настройку клиентского роутинга (Client-Side Routing) в React с помощью нового API `createBrowserRouter`.
* Понял принцип работы вложенных маршрутов (Nested Routes) и использования `<Outlet />` для создания единого шаблона (Layout) приложения.
* Научился извлекать динамические параметры из URL с помощью хука `useParams` для создания переиспользуемых страниц (например, карточки курса).
* Разобрался с паттерном предварительной загрузки данных с использованием свойства `loader` и хука `useLoaderData`, а также с обработкой ошибок через `errorElement`.
* Изучил работу с хуком `useSearchParams` для управления состоянием приложения (сортировка) через параметры запроса в URL, что позволяет делиться ссылками на конкретное состояние страницы.