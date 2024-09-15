import React from 'react'
import "./SmallCard.css"

const SmallCards = ({children}) => {
  return (
    <div className='skill-card'>
      {children}
    </div>
  )
}

export default SmallCards
