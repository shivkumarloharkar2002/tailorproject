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
    <div className='backmain'><Link to='/seecustomer_details'><img src={back} className='backimg'/></Link></div>
   
    <div className="invoice-shortCards">
        {Data.map((info) => {

          return (
            <>
           <Link to='/viewcategory'>
              < SearchCard name={info.name} date={info.date} price={info.price} id={info.id} />
           
           </Link>
            </>
          );
        })}
      </div>
    <div className='select_cat_main'>
    <Link to='/choosefabric'><SelectCategoryCard cimg={shirts} chead={"Shirt"} /> </Link>
    <SelectCategoryCard cimg={pants}  chead={"Pant"}/> 
    <SelectCategoryCard cimg={kurtas} chead={"Kurta"}/> 
    <SelectCategoryCard cimg={safari} chead={"Safari"}/> 
    <SelectCategoryCard cimg={pyjama} chead={"Pyjama"}/> 
   </div>
   </>
  )
}
