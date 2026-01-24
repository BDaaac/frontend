import React from 'react'

export default function Card({ title, className = '', children }) {
  const classes = `card${className ? ` ${className}` : ''}`
  return (
    <article className={classes}>
      <h3>{title}</h3>
      {children}
    </article>
  )
}
