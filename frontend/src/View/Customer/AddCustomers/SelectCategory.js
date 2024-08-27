import React, { useState } from 'react'
import './SelectCategory.css'
import { Link } from 'react-router-dom'
import Header from '../../../Component/Header/Header'
import back from '../../../Image/back.jpg'
// import SelectCategoryCom from '../../../Component/Customercategory/SelectCategoryCom'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import shirts from './../../../Image/shirt.jpg'
import pants from './../../../Image/pant.png'
import pyjama from './../../../Image/pyjamas.jpg'
import safari from './../../../Image/safaris.gif'
import kurtas from './../../../Image/kurta.jpg'

function SelectCategory() { 

  let [category, setCategory] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    if (category) {
      localStorage.setItem("cloth", category);
      console.log('Category stored in localStorage:', category);
      navigate("/choosefabric");
    }
  }, [category]);

  return (
    <>
      <Header />
      <Link to={"/customerinfo"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
          <h1 className="profile-back-text">Back</h1>
        </div>
      </Link>

      <h1 style={{textAlign:'center'}}>Cloths Type</h1>
      <div className='select_cat_main'>


        <div className='category_main' onClick={() => {
          setCategory("shirt");
        }}>
          <img src={shirts} alt="category image" className='category_img' /><br />
          <h2 className='category_head'>shirts</h2>
        </div>

        <div className='category_main' onClick={() => {
          setCategory("pant");
        }}>
          <img src={pants} alt="category image" className='category_img' /><br />
          <h2 className='category_head'>Pant</h2>
        </div>


        <div className='category_main' onClick={() => {
          setCategory("kurta");
        }}>
          <img src={kurtas} alt="category image" className='category_img' /><br />
          <h2 className='category_head'>Kurta</h2>
        </div>

        <div className='category_main' onClick={() => {
          setCategory("payjama");
        }}>
          <img src={pyjama} alt="category image" className='category_img' /><br />
          <h2 className='category_head'>Payjama</h2>
        </div>


        <div className='category_main' onClick={() => {
          setCategory("safari");
        }}>
          <img src={safari} alt="category image" className='category_img' /><br />
          <h2 className='category_head'>Suit Safari</h2>
        </div>





      </div>

    </>
  )
}

export default SelectCategory