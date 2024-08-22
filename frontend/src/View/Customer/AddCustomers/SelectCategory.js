import React from 'react'
import './SelectCategory.css'
import SelectCategoryCard from '../../../Component/CustomerCard/SelectCategoryCard/SelectCategoryCard'
import shirts from '../../../Image/shirts.jpeg'
import pants from '../../../Image/pants.jpeg'
import pyjama from '../../../Image/pyjama.jpeg'
import safari from '../../../Image/safari.jpeg'
import kurtas from '../../../Image/kurtas.jpeg'
import { Link } from 'react-router-dom'


function SelectCategory() {
  return (
   <>
       <header className='top_nav'></header>
   <div className='select_cat_main'>
    <Link to='/choosefabric'><SelectCategoryCard cimg={shirts} /> </Link>
    <SelectCategoryCard cimg={pants} /> 
    <SelectCategoryCard cimg={kurtas} /> 
    <SelectCategoryCard cimg={safari} /> 
    <SelectCategoryCard cimg={pyjama} /> 
    
   </div>
   </>
  )
}

export default SelectCategory