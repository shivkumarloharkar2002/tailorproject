import React, { useState } from 'react'
import './AddCustomer.css'
import { Link } from 'react-router-dom'
import Header from '../../../Component/Header/Header'
import { ToastContainer, toast } from 'react-toastify'
import back from '../../../Image/back.png'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../../axiosConfing'

export default function AddCustomer() {


  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const navigate = useNavigate(); 

  const saveCustomer = async (e) => {
    e.preventDefault()


    if (!/^\d{9,12}$/.test(phone)) {
      toast.error('Phone number must be  10 digits');
      return;
  }
    try {
      const customerData = await axiosInstance.post(
        `customerroutes/create`,
        {
          name,
          email,
          phone, 
          address
        }
      );
      const id = customerData.data.data._id
toast.success("Customer Added Successfully")
    
      if (customerData.status === 201) { 
        localStorage.setItem("customer", JSON.stringify(customerData.data.data));
      navigate(`/viewcategory/${id}`);
      console.log(customerData);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Customer is already registered. See on view customer page.');
      } else {
        toast.error(error.response?.data?.message || 'An error occurred');
      }
    }
  }



  return (
    <>
      <Header />
      <Link to={"/home"} className="link">
        <div style={{margin: '130px 0 50px 10px'}}>
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text"></h1>
        </div>
      </Link>

      <form className='customer_form' onSubmit={saveCustomer}>
        <h1 className='form_head'>Customer Information</h1>
        <input type='text' placeholder='Customer Name' value={name} className='customer_input' required onChange={
          (e) => {
            setName(e.target.value)
          }
        } /><br />
        <input type='text' placeholder='Customer E-mail' value={email} className='customer_input'  onChange={
          (e) => {
            setEmail(e.target.value)
          }
        } /><br />
        <input type='number' placeholder='Customer Phone' value={phone}  className='customer_input'    pattern="\d*"  maxLength="10" required onChange={
          (e) => {
            setPhone(e.target.value)
          }
        } /><br />
        <input type='text' placeholder='Customer Address' value={address}  className='customer_input'required onChange={
          (e) => {
            setAddress(e.target.value)
          }
        } /><br />
        <input type="submit" value="Add Customer" className=' customer_btn' />
      </form>
      <ToastContainer/>
    </>
  )
}
