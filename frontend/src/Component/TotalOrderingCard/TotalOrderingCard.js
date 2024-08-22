import React from 'react'
import './TotalOrderingCard.css'
import { Link } from 'react-router-dom'

export default function TotalOrderingCard({category,date,name,id}) {
  return (
    <>
      <Link to={'/NextOrderingPage'} className='link'>
     <div className='OName'>
        <h4 className='Category'>{category}</h4>
        <h4 className='Date'>{date}</h4>
        <h1 className='OrderN'>{name}</h1>
      </div>
     </Link>
    </>
  )
}
