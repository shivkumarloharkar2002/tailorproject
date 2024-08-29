import React from 'react'
import './SearchCard.css'
import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'


export default function SearchCard({ name, date, price, id }) {

 

  return (
    <>
      <div className='invoice-shortCard'>
        <Link to={`/viewcategory/${id}`} className='link'>
          <div className="invoice-short" >
            <p className="cust_info" >{name}</p>
            <p className="invoice-short-amount">{date} <br />
              Paid- ₹ 
              {price}
              /-
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}
