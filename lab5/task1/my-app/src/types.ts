// Interface — object shape
export interface User {
  name: string;
  email: string;
  age: number;
}

// Union type alias
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';

// Skill interface
export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}
