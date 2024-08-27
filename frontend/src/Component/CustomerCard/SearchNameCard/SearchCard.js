import React from 'react'
import './SearchCard.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function SearchCard({ name, date, price, id }) {
  const navigate = useNavigate();

  const store = async (e) => {
    try {
      const customerData = await axios.get(
        `http://localhost:5555/api/customerroutes/getcustomer`
        // `http://localhost:5555/api/customerroutes/getcustomer/${id}`

      );

      // if (customerData.data.customer_id === id) {
      localStorage.setItem("customer", JSON.stringify(customerData.data.data));
      alert("Customer selected");
      navigate("/selectcategory");
      console.log(customerData);
      // }
    } catch (error) {
      alert(error);
    }
  }


  return (
    <>
      <div className='invoice-shortCard'>
        {/* <Link to={`/selectcategory`} className='link'> */}
        <div className="invoice-short" onClick={store}>
          <p className="invoice-short-text" >{name}</p>
          <p className="invoice-short-amount">{date} <br />Paid- ₹ {price}/-</p>
        </div>
        {/* </Link> */}
      </div>
    </>
  )
}
