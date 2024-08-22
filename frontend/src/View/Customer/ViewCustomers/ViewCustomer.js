import React from 'react'
import './ViewCustomer.css'
import customer from '../../../Image/people.png'
import SearchCard from '../../../Component/CustomerCard/SearchNameCard/SearchCard'
import { Link } from 'react-router-dom'

export default function ViewCustomer() {
  return (
    <>
     <header className='top_nav'></header>
      <div className='merge_inpimg'>
        <img src={customer} className='viewc_img' />
        <input type='search' placeholder='Customer Name' className='view_input' />
      </div>
      <Link to='/selectcategory'><SearchCard/></Link>
     
     <SearchCard/>
     <SearchCard/>
     <SearchCard/>
    </>
  )
}
