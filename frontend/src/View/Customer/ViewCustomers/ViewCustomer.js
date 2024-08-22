import React from 'react'
import './ViewCustomer.css'
import customer from '../../../Image/people.png'

export default function ViewCustomer() {
  return (
    <>
     <header className='top_nav'></header>
      <div className='merge_inpimg'>
        <img src={customer} className='viewc_img' />
        <input type='search' placeholder='Customer Name' className='viewc_input' />
      </div>
      <div className='cust_info'>
        <p className='cust_date'>date</p>
        <h2>Customer Name</h2>
        <p className='cust_price'>Paid price</p>
      </div>
    </>
  )
}
