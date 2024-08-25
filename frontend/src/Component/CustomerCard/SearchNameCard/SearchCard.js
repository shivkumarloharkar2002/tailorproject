import React from 'react'
import './SearchCard.css'
import { Link } from 'react-router-dom'

export default function SearchCard({name ,date , price  }) {
  return (
    <>
     <div className='invoice-shortCard'>
            <Link to={`/viewcategory`} className='link'>
                <div className="invoice-short" >
                    <p className="invoice-short-text" >{name}</p>
                    <p className="invoice-short-amount">{date} <br />Paid- ₹ {price}/-</p>
                </div>
            </Link>
        </div>
    </>
  )
}
