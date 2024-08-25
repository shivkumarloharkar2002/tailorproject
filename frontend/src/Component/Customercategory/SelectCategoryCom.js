import React from 'react'
import './SelectCategory.css'
import SelectCategoryCard from '../../Component/CustomerCard/SelectCategoryCard/SelectCategoryCard'
import shirts from '../../Image/shirt.jpg'
import pants from '../../Image/pant.png'
import pyjama from '../../Image/pyjamas.jpg'
import safari from '../../Image/safaris.gif'
import kurtas from '../../Image/kurta.jpg'
import { Link } from 'react-router-dom'


function SelectCategoryCom() {
  return (
   <>
       
       <h1 className='center'>Cloths Category</h1>
   <div className='select_cat_main'>
    <Link to='/choosefabric'><SelectCategoryCard cimg={shirts} chead={"Shirt"} /> </Link>
    <Link to='/choosefabric'><SelectCategoryCard cimg={pants}  chead={"Pant"}/> </Link>
    <Link to='/choosefabric'><SelectCategoryCard cimg={kurtas} chead={"Kurta"}/> </Link> 
    <Link to='/choosefabric'><SelectCategoryCard cimg={safari} chead={"Safari"}/> </Link>
    <Link to='/choosefabric'><SelectCategoryCard cimg={pyjama} chead={"Pyjama"}/> </Link>
   </div>
   </>
  )
}

export default SelectCategoryCom