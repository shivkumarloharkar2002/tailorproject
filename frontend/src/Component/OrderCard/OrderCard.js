import React from 'react'
import './OrderCard.css'
import { Link } from 'react-router-dom'



export default function OrderCard({category,time,name,id}) {
  return (
    <>
    <div className='Order_short'>
    <Link to={'/orderslip'} className='link'>
     <div className='OName'>
        <h6 className='Category'>{category}</h6>
        <h6 className='Date'>{time}</h6>
        <h6 className='OrderN'>{name}</h6>
      </div>
     </Link>
    </div>
    </>
  )
}

