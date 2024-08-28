import React from 'react'
import './OrderCard.css'
import { Link } from 'react-router-dom'



export default function OrderCard({cloth_type,date,name,id}) {
  return (
    <>
    <div className='Order_short'>
    <Link to={`/invoiceInfo/${id}`} className='link'>
     <div className='OName'>
        <h6 className='Category'>{cloth_type}</h6>
        <h6 className='Date'>{date}</h6>
        <h6 className='OrderN'>{name}</h6>
      </div>
     </Link>
    </div>
    </>
  )
}

