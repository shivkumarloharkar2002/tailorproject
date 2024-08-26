import React from 'react'
import './SelectCategory.css'
import { Link } from 'react-router-dom'
import Header from '../../../Component/Header/Header'
import back from '../../../Image/back.jpg'
import SelectCategoryCom from '../../../Component/Customercategory/SelectCategoryCom'

function SelectCategory() {
  return (
   <>
       <Header/>
       <Link to={"/customerinfo"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text">Back</h1>
        </div>
      </Link>
    <SelectCategoryCom/>

    
   </>
  )
}
 
export default SelectCategory