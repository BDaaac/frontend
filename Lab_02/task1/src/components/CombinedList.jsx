import React from 'react'
import ItemList from './ItemList.jsx'

export default function CombinedList({ items }) {
  return (
    <>
      <h2>Items</h2>
      <ItemList items={items} />
      <p>Total: {items.length} items</p>
    </>
  )
}
