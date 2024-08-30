import React, { useState } from 'react'
import './AddCustomer.css'
import { Link } from 'react-router-dom'
import Header from '../../../Component/Header/Header'
import { ToastContainer, toast } from 'react-toastify'
import back from '../../../Image/back.jpg'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {


  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const navigate = useNavigate(); 

  const saveCustomer = async (e) => {
    e.preventDefault()
    try {
      const customerData = await axios.post(
        `http://localhost:5555/api/customerroutes/create`,
        {
          name,
          email,
          phone, 
          address
        }
      );
      const id =customerData.data.data._id

      // if (registerData.status === 200) { 
        localStorage.setItem("customer", JSON.stringify(customerData.data.data));
        toast.success("Customer Added Successfully");
      navigate(`/viewcategory/${id}`);
      console.log(customerData);
      // }
    } catch (error) {
      toast.error(error);
    }
  }



  return (
    <>
      <Header />
      <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text"></h1>
        </div>
      </Link>

      <form className='customer_form' onSubmit={saveCustomer}>
        <h1 className='form_head'>Customer Information</h1>
        <input type='text' placeholder='Customer Name' className='customer_input' required onChange={
          (e) => {
            setName(e.target.value)
          }
        } /><br />
        <input type='text' placeholder='Customer E-mail' className='customer_input' required onChange={
          (e) => {
            setEmail(e.target.value)
          }
        } /><br />
        <input type='number' placeholder='Customer Phone' className='customer_input' required onChange={
          (e) => {
            setPhone(e.target.value)
          }
        } /><br />
        <input type='text' placeholder='Customer Address' className='customer_input'required onChange={
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
