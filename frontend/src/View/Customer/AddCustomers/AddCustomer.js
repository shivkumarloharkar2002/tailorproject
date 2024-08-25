import React from 'react'
import './AddCustomer.css'
import { Link } from 'react-router-dom'
import Header from '../../../Component/Header/Header'
import back from '../../../Image/back.jpg'

export default function AddCustomer() {
  return (
    <>
    <Header/>
    <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text">Back</h1>
        </div>
      </Link>
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
