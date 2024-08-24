import React from 'react'
import './ViewCustomer.css'
import customer from '../../../Image/people.png'
import SearchCard from '../../../Component/CustomerCard/SearchNameCard/SearchCard'
import { Link } from 'react-router-dom'
import back from '../../../Image/back.jpg'
import Header from '../../../Component/Header/Header'

export default function ViewCustomer() {
  return (
    <>
     <header className='top_nav'><Header/></header>
     <div className='backmain'><Link to='/home'><img src={back} className='backimg'/>Back</Link></div>
      <div className='merge_inpimg'>
        <img src={customer} className='viewc_img' />
        <input type='search' placeholder='Customer Name' className='viewcust_input' />
      </div>
      <Link to='/selectcategory'><SearchCard/></Link>
     
     <SearchCard/>
     <SearchCard/>
     <SearchCard/>
    </>
  )
}
