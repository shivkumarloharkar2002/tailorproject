import React from 'react'
import './OrderCard.css'
import { Link } from 'react-router-dom'



export default function OrderCard({category,time,name,id}) {
  return (
    <>
     <Link to={'/NextOrderingPage'} className='link'>
     <div className='OName'>
        <h4 className='Category'>{category}</h4>
        <h4 className='Date'>{time}</h4>
        <h1 className='OrderN'>{name}</h1>
      </div>
     </Link>
    </>
  )
}
