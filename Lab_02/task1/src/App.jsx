import React from 'react'
import FragmentLayout from './components/FragmentLayout.jsx'
import CombinedList from './components/CombinedList.jsx'

const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
]

export default function App() {
  return (
    <>
      <FragmentLayout />
      <CombinedList items={items} />
    </>
  )
}
