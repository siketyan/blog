import React from 'react'

export const Callout = ({ children, icon }) => {
  return (
    <div className="bg-gray-100 p-3 my-2 flex">
      {icon && <div className="flex-grow-0 flex-shrink-0 mr-2">{icon}</div>}
      {children}
    </div>
  )
}
