import React from 'react'
import Card from './components/Card.jsx'
import Section from './components/Section.jsx'
import ProductList from './components/ProductList.jsx'

export default function App() {
  return (
    <>
      {/* Task 1: Render at least two Card instances */}
      <Card title="Welcome" className="highlight">
        <p>This is a reusable Card component.</p>
      </Card>
      <Card title="About">
        <p>Cards accept dynamic props and children.</p>
      </Card>

      {/* Task 3: Section composed with ProductList inside */}
      <Section title="Products">
        <ProductList />
      </Section>
    </>
  )
}
