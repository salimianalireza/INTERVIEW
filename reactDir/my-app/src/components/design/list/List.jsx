import React from 'react'

export default function List({ items, className, ...props }) {
  return (
    <ul className={`list-inside ${className || ''}`} {...props}>
      {items.map((item) => (
        <li className='py-2 hover:bg-gray-100 pl-2' key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
