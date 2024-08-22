import React from 'react'
import './AddCustomer.css'

export default function AddCustomer() {
  return (
    <>
    <header className='top_nav'></header>
    <form className='customer_form'>
      <h1 className='form_head'>Customer Information</h1>
      <input type='text' placeholder='Customer Name' className='customer_input'/><br/>
      <input type='number' placeholder='Customer Phone' className='customer_input'/><br/>
      <input type='text' placeholder='Customer Address' className='customer_input'/><br/>
      <button className='customer_btn'>Submit</button>
    </form>
    </>
  )
}
