# AI Usage Report - Lab 13: Mobile Navigation

**Tool Used:** Claude 3.5 Sonnet / ChatGPT / Gemini (оставь нужное)

### 1. Prompts Used
* "How to set up `createNativeStackNavigator` and `createBottomTabNavigator` together in a React Native Expo project?"
* "How to pass and extract route parameters (like `userId`) between screens in React Navigation?"
* "Provide an example of a React Native Search screen using `FlatList` with local array filtering."
* "How to add a custom notification badge to an icon in `@react-navigation/bottom-tabs`?"
* "How to properly type nested navigators (Stack inside Tabs) using TypeScript in React Navigation v6?"

### 2. How I modified and verified the code
* Сгенерированный код был адаптирован под требуемую структуру папок (`task1` и `task2`) и специфичные требования к дизайну из методички.
* Я исправил синтаксические ошибки и потерянные скобки/импорты, которые возникли при копировании текста из PDF-файла (например, добавление правильных импортов для `SafeAreaView` и `TouchableOpacity`).
* Вручную протестировал приложение через Expo: проверил, что переходы между вкладками (Tabs) работают корректно и каждая вкладка сохраняет свою собственную историю переходов (Stack).
* Убедился, что передача параметров маршрута (например, переход на `ProfileScreen` с передачей `userId`) работает и TypeScript не выдает ошибок типизации.
* Проверил работу компонентов `FlatList`, включая фильтрацию поиска и логику `RefreshControl` на экране уведомлений.

### 3. What I learned
* Я научился реализовывать сложные паттерны навигации, вкладывая `Stack.Navigator` внутрь `Tab.Navigator`, что позволяет каждой вкладке иметь свою независимую иерархию экранов.
* Получил опыт работы с передачей данных между экранами с помощью параметров маршрута (`route.params`).
* Освоил строгую типизацию навигации в React Native с помощью TypeScript (`RootStackParamList`, `NativeStackNavigationProp`), что помогает избежать ошибок при передаче параметров и указании имен экранов.
* Практиковался в создании сложных UI-элементов, таких как кастомные бейджи (badges) для иконок вкладок и поисковая строка с динамической фильтрацией списка.