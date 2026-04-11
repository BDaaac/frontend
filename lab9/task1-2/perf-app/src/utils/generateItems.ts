export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
}

export function generateItems(count: number): Item[] {
  const categories = ["Tech", "Science", "Business"];

  const items: Item[] = [];

  for (let i = 0; i < count; i++) {
    items.push({
      id: i,
      title: `Item ${i}`,
      description: `Description ${i}`,
      category: categories[Math.floor(Math.random() * categories.length)],
    });
  }

  return items;
}