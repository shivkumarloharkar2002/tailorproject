import React from 'react'
import './SelectCategory.css'
import SelectCategoryCard from '../../../Component/CustomerCard/SelectCategoryCard/SelectCategoryCard'
import shirts from '../../../Image/shirt.jpg'
import pants from '../../../Image/pant.png'
import pyjama from '../../../Image/pyjamas.jpg'
import safari from '../../../Image/safaris.gif'
import kurtas from '../../../Image/kurta.jpg'
import { Link } from 'react-router-dom'


function SelectCategory() {
  return (
   <>
       <header className='top_nav'></header>
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

export default SelectCategory