import React from 'react'
import Card from './Card.jsx'

const products = [
  { id: 1, name: 'Widget', price: 9.99 },
  { id: 2, name: 'Gadget', price: 19.99 },
  { id: 3, name: 'Doohickey', price: 4.5 },
]

export default function ProductList() {
  return (
    <>
      {products.map((p) => (
        <Card key={p.id} title={p.name}>
          <p>Price: ${p.price}</p>
        </Card>
      ))}
    </>
  )
}
