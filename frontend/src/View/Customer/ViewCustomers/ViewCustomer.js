import React from 'react'
import './ViewCustomer.css'
import customer from '../../../Image/people.png'
import SearchCard from '../../../Component/CustomerCard/SearchNameCard/SearchCard'
import { Link } from 'react-router-dom'
import back from '../../../Image/back.jpg'
import Header from '../../../Component/Header/Header'
import axios from 'axios'
import { useState, useEffect } from 'react'




export default function ViewCustomer() {

  const [getCustomerData, setGetCustomerData] = useState([]);

  const getUser = async () => {
    const getNote = await axios.get(
      "http://localhost:5555/api/customerroutes/getcustomer"
    );
    setGetCustomerData(getNote.data.data);
    console.log(getNote);
  };
 
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <header className='top_nav'><Header /></header>
      <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text">Back</h1>
        </div>
      </Link>
      <div className="invoice-input">
        <img src={customer} alt="" className="invoice-icon" />
        <input
          type="text"
          className="invoice-inputs"
          placeholder="Search Customer Name"
        />
      </div>

      <hr className='hr' />

      <div className="invoice-shortCards">
        {getCustomerData.map((info) => {

          return (
            <>
              <Link to='/seecustomer_details'>
                < SearchCard name={info.name} date={info.date} price={info.price} id={info.id} />

              </Link>
            </>
          );
        })}
      </div>
    </>
  ) 
}
