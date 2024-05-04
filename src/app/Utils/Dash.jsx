import React from 'react'

export default function Dash({BorderStyle="dashed"}) {
  return (
    <div className={`flex-1 h-1 border-b-2 border-b-gray-500 border-${BorderStyle}`}></div>
  )
}
