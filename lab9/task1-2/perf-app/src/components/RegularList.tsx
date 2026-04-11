import { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

export function RegularList() {
  const items = useMemo(() => generateItems(10000), []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}