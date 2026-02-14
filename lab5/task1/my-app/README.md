# Lab 5.1 — TypeScript & Props Validation

This project demonstrates typed React components using TypeScript interfaces, union types, and typed props.

## Defined types

Types are stored in `src/types.ts`:

- `User` interface:
  - `name: string`
  - `email: string`
  - `age: number`
- `SkillLevel` union type:
  - `'Beginner' | 'Intermediate' | 'Expert'`
- `Skill` interface:
  - `id: number`
  - `name: string`
  - `level: SkillLevel`

## Components

- `UserCard.tsx`
  - Uses `UserCardProps` interface
  - Includes optional prop `isActive?: boolean` with default value
  - Uses typed `children: ReactNode`
- `SkillList.tsx`
  - Uses `SkillListProps` with typed array `skills: Skill[]`
  - Renders skills with `.map(...)`
  - Applies conditional color styling based on `SkillLevel`
- `App.tsx`
  - Imports and renders `UserCard` and `SkillList`
  - Provides sample typed data for `User` and `Skill[]`

## Run

```bash
npm install
npm run dev
```

## TypeScript

- Strict mode is enabled in TypeScript configuration.
- Project compiles with zero TypeScript errors.
