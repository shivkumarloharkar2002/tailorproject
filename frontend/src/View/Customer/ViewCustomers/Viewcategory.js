import React from 'react'
import SearchCard from '../../../Component/CustomerCard/SearchNameCard/SearchCard'
import SelectCategoryCard from '../../../Component/CustomerCard/SelectCategoryCard/SelectCategoryCard'
import Header from '../../../Component/Header/Header'
import { Link } from 'react-router-dom'
import shirts from '../../../Image/shirt.jpg'
import pants from '../../../Image/pant.png'
import pyjama from '../../../Image/pyjamas.jpg'
import safari from '../../../Image/safaris.gif'
import kurtas from '../../../Image/kurta.jpg'
import back from '../../../Image/back.jpg'


export default function Viewcategory() {

    const Data = [
        {
          id: 1,
          name: "Somnath Bhoyate",
          date: "10/02/12",
          price: 235,
        },
        {
          id: 2,
          name: "Somnath Bhoyate",
          date: "24/08/24",
          price: 2351,
        }
      
      ];
  return (
   <><header className='top_nav'><Header/></header>
      <Link to={"/seecustomer_details"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text">Back</h1>
        </div>
      </Link>
   
    <div className="invoice-shortCards">
        {Data.map((info) => {

          return (
            <>
           
              < SearchCard name={info.name} date={info.date} price={info.price} id={info.id} />
           
          
            </>
          );
        })}
      </div>
    <div className='select_cat_main'>
    <Link to='/viewfabric'><SelectCategoryCard cimg={shirts} chead={"Shirt"} /> </Link>
    <SelectCategoryCard cimg={pants}  chead={"Pant"}/> 
    <SelectCategoryCard cimg={kurtas} chead={"Kurta"}/> 
    <SelectCategoryCard cimg={safari} chead={"Safari"}/> 
    <SelectCategoryCard cimg={pyjama} chead={"Pyjama"}/> 
   </div>
   </>
  )
}
