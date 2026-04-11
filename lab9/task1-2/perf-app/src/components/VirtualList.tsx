import { useState, useMemo, useCallback } from "react";
import { List, type RowComponentProps } from "react-window";
import { generateItems, type Item } from "../utils/generateItems";

type RowData = {
  items: Item[];
};

function Row({ index, style, items }: RowComponentProps<RowData>) {
  const item = items[index];
  return <div style={style}>{item.title}</div>;
}

export function VirtualList() {
  const [filter, setFilter] = useState("");

  const items = useMemo(() => generateItems(10000), []);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const rowProps = useMemo(() => ({ items: filteredItems }), [filteredItems]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div>
      <input
        placeholder="search..."
        value={filter}
        onChange={handleChange}
      />

      <List
        rowComponent={Row}
        rowCount={filteredItems.length}
        rowHeight={50}
        rowProps={rowProps}
        style={{ height: 400, width: 300 }}
      />
    </div>
  );
}