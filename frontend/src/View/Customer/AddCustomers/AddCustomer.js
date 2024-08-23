import React from 'react'
import './AddCustomer.css'
import { Link } from 'react-router-dom'
import Header from '../../../Component/Header/Header'

export default function AddCustomer() {
  return (
    <>
    <header className='top_nav'><Header/></header>
    <form className='customer_form'>
      <h1 className='form_head'>Customer Information</h1>
      <input type='text' placeholder='Customer Name' className='customer_input'/><br/>
      <input type='text' placeholder='Customer E-mail' className='customer_input'/><br/>
      <input type='number' placeholder='Customer Phone' className='customer_input'/><br/>
      <input type='text' placeholder='Customer Address' className='customer_input'/><br/>
      <Link to='/selectcategory'>  <button className='customer_btn'>Submit</button></Link>
    </form>
    </>
  )
}
