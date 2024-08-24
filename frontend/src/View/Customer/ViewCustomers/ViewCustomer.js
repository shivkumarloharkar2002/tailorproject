import React from 'react'
import './ViewCustomer.css'
import customer from '../../../Image/people.png'
import SearchCard from '../../../Component/CustomerCard/SearchNameCard/SearchCard'
import { Link } from 'react-router-dom'
import back from '../../../Image/back.jpg'
import Header from '../../../Component/Header/Header'




const Data = [
  {
    id: 1,
    name: "Somnath Bhoyate",
    date: "10/02/12",
    price: 235,
  },
  {
    id: 2,
    name: "Shambhu Bhoyate",
    date: "10/02/12",
    price: 2351,
  },
  {
    id: 3,
    name: "Mahadev Bhoyate",
    date: "10/02/12",
    price: 245,
  },
  {
    id: 4,
    name: "Dhanraj Bhoyate",
    date: "10/02/12",
    price: 245,
  },
  {
    id: 5,
    name: "Rajendra Bhoyate",
    date: "10/02/12",
    price: 245,
  },
];

export default function ViewCustomer() {
  return (
    <>
     <header className='top_nav'><Header/></header>
     <div className='backmain'><Link to='/home'><img src={back} className='backimg'/>Back</Link></div>
     <div className="invoice-input">
        <img src={customer} alt="" className="invoice-icon" />
        <input
          type="text"
          className="invoice-inputs"
          placeholder="Search Customer Name"
        />
      </div>
     
     
    
      <div className="invoice-shortCards">
        {Data.map((info) => {

          return (
            <>
           
              < SearchCard name={info.name} date={info.date} price={info.price} id={info.id} />
           
            </>
          );
        })}
      </div>
    </>
  )
}
