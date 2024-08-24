import React from 'react'
import './SelectCategory.css'
import SelectCategoryCard from '../../../Component/CustomerCard/SelectCategoryCard/SelectCategoryCard'
import shirts from '../../../Image/shirt.jpg'
import pants from '../../../Image/pant.png'
import pyjama from '../../../Image/pyjamas.jpg'
import safari from '../../../Image/safaris.gif'
import kurtas from '../../../Image/kurta.jpg'
import { Link } from 'react-router-dom'
import Header from '../../../Component/Header/Header'
import back from '../../../Image/back.jpg'

function SelectCategory() {
  return (
   <>
       <header className='top_nav'><Header/></header>
       <div className='backmain'><Link to='/customerinfo'><img src={back} className='backimg'/>Back</Link></div>
       <h1 className='center'>Cloths Category</h1>
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