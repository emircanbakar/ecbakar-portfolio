import React from 'react'
import "./BigCard.css"

const BigCards = ({children}) => {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default BigCards
